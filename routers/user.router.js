const express = require('express');
const userController = require('../controllers/user.controller');
const {createUserValidation} = require('../validators/user.validation');
const auth = require("../middlewares/auth");
const router = express.Router();

router.post('/user' , createUserValidation ,userController.registerUser);

router.post('/login' , userController.loginUser);

router.get('/testtoken', auth.verifyToken , function(req , res) {
    res.status(200).send({msg : "Authenticated"})
})

router.post('/forgot-password',userController.forgot_password);

router.get('/reset-password',userController.reset_password);

router.get('/user' , userController.getUser);

router.get('/user/:id' , userController.getOneUser);

router.put('/user/:id' , userController.updateUser);

router.delete('/user/:id' , userController.deleteUser);

router.delete('/user' , userController.deleteAllUser);

module.exports = router