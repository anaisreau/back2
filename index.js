const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(bodyParser.json())

const Users = require('./routes/user')
app.use('/users', Users)


app.listen(3001, console.log('Server running'))