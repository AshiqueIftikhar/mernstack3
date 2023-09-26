const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: String,
    status: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
  });

  const Admin = mongoose.model('Admin', adminSchema);
  module.exports = Admin;