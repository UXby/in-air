"use strict";

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

class Rest {
    constructor(app) {
        this.getDirectories(__dirname).map((name) => {
            let endpoint = express();
            endpoint.use(cors());
            endpoint.use(bodyParser.json());
            app.use('/api/' + name + 's', endpoint);
            require(__dirname + '/' + name + '/index.js')(endpoint);
        });
    }

    getDirectories(srcpath) {
        return fs.readdirSync(srcpath).filter((file) => {
            return fs.statSync(path.join(srcpath, file)).isDirectory();
        });
    }
}

module.exports = Rest;