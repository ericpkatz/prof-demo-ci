const express = require('express');
const app = express();

const { getUsers } = require('./db');

app.get('/api/users', async(req, res, next)=> res.send( await getUsers()));

module.exports = app;
