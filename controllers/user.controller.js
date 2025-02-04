const userService = require('../services/user.service');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/env.config');
const express = require('express');
const bodyParser = require('body-parser');
const randomstring = require('randomstring');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const api = express();

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

const sendEmail = async (email, _id ,password_token) => {
    try {
        const transporter = nodemailer.createTransport({
            host: config.SMTP_HOST,
            port: config.SMTP_PORT,
            secure: false,
            requireTLS: true,
            auth: {
                user: config.SMTP_MAIL,
                pass: config.SMTP_PASSWORD
            }
        })

        const mailOptions = {
            from: config.SMTP_MAIL,
            to: email,
            subject: 'For Reset Password',
            html: '<p> please copy this link and <a href="http://localhost:5000/app/v1/users/reset-password?_id=' + _id + '&password_token=' + password_token + '"> reset your password </a>'

        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                throw error
            }
            else {
                console.log("Mail has benn send ")
            }
        })
    }
    catch (err) {
        return err.message
    }
}


const create_accessToken = async (id) => {
    try {
        const access_token = jwt.sign({ _id: id }, config.SECRET_KEY, { expiresIn: "2h" });
        return access_token;
    }
    catch (err) {
        return err.message
    }
}

const create_refreshToken = async (id) => {
    try {
        const access_token = jwt.sign({ _id: id }, config.SECRET_KEY, { expiresIn: "30d" });
        return access_token;
    }
    catch (err) {
        return err.message
    }
}

const registerUser = async (req, res) => {

    try {
        const register_date = Date.now()

        const { email, password, first_name, last_name, phone_number, street_address, city, state, country , postcode } = req.body;

        const hashpassword = await bcrypt.hash(password, 10)

        const existingUser = await userService.checkExistingUser(email);
        if (existingUser) {
            return res.status(409).json({
                status: "this emailID is already exists",
            })
        }

        const user = await userService.registerUser({
            email, password: hashpassword, first_name, last_name, phone_number, register_date, street_address, city, state, country , postcode 
        })

        res.status(201).json({
            data: user,
            message: "successfully created user"
        })
    }
    catch (err) {
        res.status(400).json({
            data: err.message
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.loginUser({ email: email });

        if (user) {
            const checkPassword = bcrypt.compareSync(password, user.password);

            if (!checkPassword) {
                res.status(401).json({ error: "something went wrong" });
            }
            const access_tokenData = await create_accessToken(user._id);
            res.status(200).json({
                status: "successfully login",
                token: access_tokenData
            });

            await userModel.updateOne(user , {$set : {accesstoken : access_tokenData}} , {new : true})

            if (!access_tokenData) {
                const refresh_tokenData = await create_refreshToken(user._id);
                res.status(200).json({
                    token: refresh_tokenData
                });
            }

        }
        else {
            res.json("User doesn't exist");
        }
    } catch (err) {
        res.status(400).json({
            data: err.message
        });
        console.log(err)
    }
}

const getUser = async (req, res) => {
    try {
        const category = await userService.getUser();
        res.status(201).json({
            data: category,
            message: "successfully get users"
        })
    }
    catch (err) {
        response = res.status(400).json({
            data: err.message
        })
    }
}

const getOneUser = async (req, res) => {

    try {
        const cart = await userService.getOneUser({ _id: req.params.id });
        res.status(201).json({
            data: cart,
            message: "successfully get the users"
        })
    }
    catch (err) {
        res.status(400).json({
            data: err.message
        })
    }
}

const updateUser = async (req, res) => {

    try {
        const cart = await userService.updateUser({ _id: req.params.id }, { $set: req.body });
        res.status(201).json({
            data: cart,
            message: "successfully updated"
        })
    }
    catch (err) {
        res.status(400).json({
            data: err.message
        })
    }
}

const deleteUser = async (req, res) => {

    try {
        const cart = await userService.deleteUser({ _id: req.params.id });
        res.status(201).json({
            data: cart,
            message: "successfully deleted"
        })
    }
    catch (err) {
        res.status(400).json({
            data: err.message
        })
    }
}

const deleteAllUser = async (req, res) => {

    try {
        const cart = await userService.deleteAllUser();
        res.status(201).json({
            data: cart,
            message: "successfully deleted"
        })
    }
    catch (err) {
        res.status(400).json({
            data: err.message
        })
    }
}

const forgot_password = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await userModel.findOne({ email: email });

        if (user) {
            const randomString = randomstring.generate();
            const data = await userService.forgot_password({ email: email }, { $set: { password_token: randomString } })
            sendEmail(user.email , user._id , randomString);
            res.status(200).json({
                data: data,
                message: "please check your inbox"
            })
        }
        else {
            res.status(200).json({
                message: "user done not exist"
            })
        }

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const reset_password = async (req, res) => {
    try {

        const checkuser = await userModel.findOne({_id : req.query._id})
        if(checkuser) {
            const password = req.body.password;
            const hashpassword = await bcrypt.hash(password, 10)
            const checktoken = await userModel.findOne({password_token : req.query.password_token})
            if(checktoken) {
                await userService.reset_password(checkuser , {$set : {password : hashpassword , password_token : ''}} , {new : true})
                res.send("your password has been reset")
            }
            else{
                res.send("user not verifed")
            }
        }

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}


module.exports = {
    registerUser,
    loginUser,
    getUser,
    getOneUser,
    updateUser,
    deleteUser,
    deleteAllUser,
    forgot_password,
    reset_password
}