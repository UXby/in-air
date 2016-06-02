"use strict";

const express = require('express');
const Rest = require('./rest/index');
const app = express();
const rest = new Rest(app);

app.use(express.static(__dirname + '/../web'));
app.use((req, res) => {
    res.status(404).send('Sorry cant find that!');
});

app.listen(8080);

module.exports.app = app;