const express = require('express')
const mongoose = require('mongoose')
const port = 3000;
const app = express()
const url = 'mongodb://localhost:27017/firstPL'
const cors = require('cors')
require('dotenv').config

mongoose.connect(url)
.then(success => {
    console.log('db connect succesfull');
})
.catch(err => {
    console.log('db not connect, error ' + err);
})

app.use(express.json())
const router = require('./router/router')
app.use(router)

app.get('/', (req,res)=>{
    res.send('Hello this is zuri Assignment')
})

app.listen(port, ()=>{
    console.log('app listening on port ' + port);
})