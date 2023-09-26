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

// Connect to MongoDB
const mongoDB = process.env.MONGO_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const router = require('./src/Routes/api');
app.use('/api', router);

// Define undefined route (404)
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not Found' });
});

module.exports = app;
