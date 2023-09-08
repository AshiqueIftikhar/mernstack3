const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./src/routes/api');

const URI ="mongodb+srv://<username>:<password>@cluster0.9pvozuw.mongodb.net/mern-module-21-db?retryWrites=true&w=majority";
const OPTION = {user:'ifty', pass:'ifty123'};
mongoose.connect(URI, OPTION).then(error=>{
       console.log("connected to database.")
    })

app.use(cors());
app.use(bodyParser.json());
app.use('/api',router);

// app.get('/',(req,res)=>{
//     res.send("hello")
// })

app.listen(5000, ()=>{
    console.log("Connected.")
})