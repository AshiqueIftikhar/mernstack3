const mongoose = require('mongoose');

const subAdminSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: String,
    status: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

const SubAdmin = mongoose.model('SubAdmin', subAdminSchema);
module.exports = SubAdmin;