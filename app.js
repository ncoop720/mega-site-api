var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send({
    'Output': 'Hello World!'
  })
})

app.get('/test', (req, res) => {
  res.send({
    'Message1': 'This is a test',
    'Message2': 'Another test'
  })
})

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
