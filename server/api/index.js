const express = require('express')

const app = module.exports = express()

require('./routes')(app)
