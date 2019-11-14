const express = require('express')
const app = express()
const User = require("../models/User")

app.get('/users', (req, res) => {
  User.find({}).then(data => {
    return res.json(data)
  }).catch(err => res.json(err))
})

module.exports = app