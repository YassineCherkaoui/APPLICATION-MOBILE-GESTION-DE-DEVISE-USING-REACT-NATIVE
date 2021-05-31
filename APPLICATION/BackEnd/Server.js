const express = require('express')
const app = express()
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
var cors = require('cors')

// routes
const userRouter = require('./routes/user')

app.get('/', (req, res) => {
    res.send('Backend is ON')
})

// config app
require('dotenv').config()

//Mongoose
mongoose.connect('mongodb://localhost:27017/testforex',{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
}).then(()=>{
    console.log('Successfully Connected to the Database');
}).catch(err =>{
    console.log('could not connect to the database . Exiting now..',
    process.exit());
});

// middllwares
app.use(express.json())
app.use(expressValidator())
app.use(cors())

// routes
app.use('/api/user', userRouter)

const port = process.env.PORT || 3000

app.listen(port, () =>console.log("Your Server is on ",`http://localhost:${port}`))

module.exports = app

