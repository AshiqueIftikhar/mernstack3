const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./src/routes/bookRoute');

// Create the Express application
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://ifty:ifty1971@cluster0.9pvozuw.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware for parsing JSON bodies
app.use(express.json());

// Use book routes
app.use('/books', bookRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
