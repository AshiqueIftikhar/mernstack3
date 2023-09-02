const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema  = mongoose.Schema({
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true, 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
    },
    password: { 
        type: String, 
        required: true, 
    },
    address: { 
        type: String,
    },
    phoneNumber: { 
        type: String,
    }
})

// Hash the password before saving it
DataSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
  });

const UserModel = mongoose.model('users', DataSchema);
module.exports = UserModel;
