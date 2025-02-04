const UserModel = require('../models/user.model');

const checkExistingUser = async (email) => {
    const existingUser = await UserModel.findOne({ email: email });
    return existingUser !== null;
}

const registerUser = async (user) => {
    try {
        return UserModel.create(user)
    }
    catch (err) {
        return err.message
    }
}

const loginUser = async (user) => {
    try {
        return UserModel.findOne(user)
    }
    catch (err) {
        return err.message
    }
}

const getUser = async () => {

    try {
        return UserModel.find();
    }
    
    catch (err) {
        return err.message
    }
}

const getOneUser = async (user_no) => {

    try {
        return UserModel.findOne(user_no);
    }
    
    catch (err) {
        return err.message
    }
}

const updateUser = async (user_no , user) => {

    try {
        return UserModel.updateOne(user_no , user);
    }
    
    catch (err) {
        return err.message
    }
}

const deleteUser = async (user_no) => {

    try {
        return UserModel.deleteOne(user_no);
    }
    
    catch (err) {
        return err.message
    }
}

const deleteAllUser = async () => {

    try {
        return UserModel.deleteMany();
    }
    
    catch (err) {
        return err.message
    }
}

const forgot_password = async (email , token) => {
    try {
        return UserModel.updateOne(email , token);
    }
    
    catch (err) {
        return err.message
    }
}

const reset_password = async ( id , password) => {
    try {
        return UserModel.updateOne(id , password);
    }
    
    catch (err) {
        return err.message
    }
}


module.exports = { 
    checkExistingUser,
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