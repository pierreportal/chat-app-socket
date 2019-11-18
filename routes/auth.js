const express = require('express')
const app = express()
const User = require('../models/User')

app.post('/login', (req, res) => {
  const { username } = req.body
  User.findOne({ username }).then(match => {
    req.session.currentUser = match
    return res.json(match)
  }).catch(err => res.json(err))
});

module.exports = app