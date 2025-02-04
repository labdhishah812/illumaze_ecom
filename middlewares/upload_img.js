const aws = require("aws-sdk");
const multer = require('multer');
const multerS3 = require("multer-s3");
const { S3Client } = require('@aws-sdk/client-s3');
const config = require('../config/env.config');

aws.config.update(config)

const s3 = new S3Client({
    Credential: {
        accessKryId: config.AWS_ACCESS_KEY_ID,
        secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    },
    region: config.REGION
})

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: config.BUCKET,
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            const fileName = Date.now() + "_" + file.originalname;
            cb(null, fileName);
        }
    })
})

const singleUpload = upload.single('product_img');

module.exports = { singleUpload };
