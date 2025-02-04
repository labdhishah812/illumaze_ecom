const mongoose = require('mongoose');
const express = require('express');
const config = require('./config/env.config');
const mainRouter = require('./index');
const cors = require("cors");
const app = express();

mongoose.connect(config.DATABASE_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection successful!');
}).catch((e) => {
    console.log('Connection failed!');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/app/v1' , mainRouter);

app.use(cors({
    origin: config.ORIGIN,
    methods: config.METHODS,
    credentials: true,
}));

app.listen(config.PORT , () => {
    console.log('Listening on port ' + config.PORT);
});
