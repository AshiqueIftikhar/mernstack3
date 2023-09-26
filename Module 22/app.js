const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');

const app = express();

// Load environment variables from config.env
dotenv.config({ path: './config.env' });

// Add security middleware
app.use(helmet());
app.use(cors());
app.use(hpp());
app.use(mongoSanitize());
app.use(bodyParser.json());
app.use(cookieParser());

// Rate Limit
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

// Connect to MongoDB
const URI =process.env.MONGO_URI;
const OPTION = {user:process.env.MONGO_USER, pass:process.env.MONGO_PASS};
mongoose.connect(URI, OPTION).then(error=>{
       console.log("connected to database.")
    })


// Routes
const router = require('./src/Routes/api');
app.use('/api', router);

// Define undefined route (404)
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not Found' });
});

module.exports = app;
