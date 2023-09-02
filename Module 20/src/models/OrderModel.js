const mongoose = require('mongoose');
const DataSchema  = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    },
    items:[
        {
            product:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products',
            },
            qunatity:{
                type: Number,
            }
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
        min: 0,
    },
    shippingAddress:{
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'pending',
    }
    
})

const OrderModel = mongoose.model('orders', DataSchema);
module.exports = OrderModel;