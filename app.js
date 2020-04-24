const express = require('express');
const app = express();

app.get('/api/users', (req, res, next)=> res.send([
  { name: 'lucy' },
  { name: 'moe' },
]));

module.exports = app;
