const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const employeeModel = mongoose.model('employees', employeeSchema);
module.exports = employeeModel