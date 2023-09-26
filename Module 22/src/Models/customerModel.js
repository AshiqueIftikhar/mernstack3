const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    status: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
  });

  const Customer = mongoose.model('Customer', customerSchema);
  module.exports = Customer;