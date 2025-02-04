const joi = require('joi');

const userSchema = joi.object({
    email: joi.string().email().trim().required(),
    password: joi.string().min(8).trim().required(),
    first_name: joi.string().min(2).trim(),
    last_name: joi.string().min(2).trim(),
    phone_number: joi.number().min(10),
    street_address: joi.string().trim(),
    city: joi.string().trim(),
    state: joi.string().trim(),
    county: joi.string().trim(),
    postcode: joi.number()
})

module.exports = {
    createUserValidation(req, res, next) {
        const { error, value } = userSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.message });
        }
        req.body = value;
        next();
    }
};