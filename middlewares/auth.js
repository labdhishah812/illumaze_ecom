const jwt = require('jsonwebtoken');
const secretKey = require('../config/env.config');

const verifyToken = (req , res , next) => {
    if(!req.headers['authorization']) {
      return next("authorization failed");
    }

    const authHeader = req.headers['authorization'];
    const bearerToken = authHeader.split(' ');
    const token = bearerToken[1];

    jwt.verify(token , secretKey.SECRET_KEY , (err , payload) => {
      if(err) {
        return next("invalid token");
      }
      req.payload = payload;
      next();
    })
}
  
module.exports = {verifyToken};
    
