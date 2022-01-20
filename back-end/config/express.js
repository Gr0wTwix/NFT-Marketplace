const express = require('express');
const cors = require('cors');
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');
const config = require('.');

module.exports = (app) => {
    app.use(
        express.urlencoded({
            extended: true
        })
    );
    app.use(cors(config.CORS));
    app.use(logger());
    // app.use(auth());
    app.use(express.json());
}