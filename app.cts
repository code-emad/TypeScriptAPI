const express = require('express')
const app = express()


// listen file
//const app = require('./app')
const { PORT = 9090 } = process.env

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));


console.log(express)