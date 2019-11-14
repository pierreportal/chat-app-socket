const express = require('express')
const app = express()
const User = require("../models/User")
const Message = require("../models/Message")

app.get('/users', (req, res) => {
  User.find({}).then(data => {
    return res.json(data)
  }).catch(err => res.json(err))
})

app.get('/fakeAuth', (req, res) => {
  User.findOne({ username: "Mastermin" }).then(data => {
    return res.json(data)
  }).catch(err => res.json(err))
})
app.get('/messages', (req, res) => {
  Message.find({}).populate('by').then(data => {
    return res.json(data)
  }).catch(err => res.json(err))
})
app.post('/messages', (req, res) => {
  const { to, by, message } = req.body
  // console.log('TO:::::', to, 'BY:::::', by, "MESS:::::", message)

  Message.create({ by: by, content: message }).then(data => {
    return res.json(data)
  }).catch(err => res.json(err))
})

module.exports = app