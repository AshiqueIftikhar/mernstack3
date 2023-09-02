const mongoose = require('mongoose');
const DataSchema  = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'users',
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'products',
    },
    quantity:{
        type: Number,
        required: true,
        min: 1,
    }
})

const CartItemModel = mongoose.model('cartItems', DataSchema);
module.exports = CartItemModel;