require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL
const PORT = process.env.PORT
const SECRET_KEY = process.env.SECRET_KEY
const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = process.env.SMTP_PORT
const SMTP_MAIL = process.env.SMTP_MAIL
const SMTP_PASSWORD = process.env.SMTP_PASSWORD
const REGION = process.env.REGION
const BUCKET = process.env.BUCKET

module.exports = {
    DATABASE_URL,
    SMTP_HOST,
    SMTP_PORT,
    SMTP_MAIL,
    SMTP_PASSWORD,
    PORT,
    SECRET_KEY,
    awsconfig : {
        accessKryId : process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY,
    },
    REGION,
    BUCKET
} 