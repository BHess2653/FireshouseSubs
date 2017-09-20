const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = process.env.PORT || 8080

exports.server = app.listen(port, () => {
  console.log('Server Active On Port', port)
})

const myApp = require('./src/app/app')
myApp(app)
