const express = require('express')
const router = require('./src/routes/api.js');
const app = new express();
const path = require('path');
const bodyParser =require('body-parser');


const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

const mongoose =require('mongoose');

// Security Middleware
app.use(cors());
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(bodyParser.json())

// Request Rate Limit
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

//Database Integration
 const URI ="mongodb+srv://<username>:<password>@cluster0.9pvozuw.mongodb.net/module-18-db?retryWrites=true&w=majority";
const OPTION = {user:'ifty', pass:'ifty123',
useNewUrlParser: true,
useUnifiedTopology: true};
mongoose.connect(URI, OPTION).then(error=>{
//     console.log("connected to database.")
//    console.log(error);
})

//connect to db
// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("Connected To DB");
// })


app.use("/api/v1", router);


// app.use(express.static('client/dist'))
// app.get('*', (req, res)=>{
//     res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
// })

module.exports=app;