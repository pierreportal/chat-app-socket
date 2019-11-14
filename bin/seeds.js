const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const User = require("../models/User")
// const Task = require("../models/Task")
// const Answer = require("../models/Answer")

const data = require("./userdata.json")


const cryptPsw = strPsw => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(strPsw, salt)
}

const processedData = data.map(x => {
  x.password = cryptPsw(x.password)
  return x
})

// console.log(processedData)


mongoose.connect("mongodb://localhost/chat-app-socket").then(() => {
  //...
}).catch(err => console.log(err))

User.insertMany(processedData).then(response => {
  console.log(`${response.length} users created.`)
  mongoose.connection.close()
}).catch(err => console.log(err))