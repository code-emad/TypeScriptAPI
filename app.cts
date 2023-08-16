const express = require('express')
const app = express()
const cors = require('cors');
import { db } from "./db/connection.cjs";

app.use(cors())

app.use(express.json())

app.get('/api/names', (request, response, next) => {
    () => {
        const sqlString = 'SELECT * FROM names;'
    return db.query(sqlString).then((names) => {
        console.log(names)
        response.status(200).send()
    })
    }
})






// listen file
//const app = require('./app') will need to be included once moved to separate file
const { PORT = 9090 } = process.env

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));


console.log(express)