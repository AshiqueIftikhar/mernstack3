const mongoose = require('mongoose');
const DataShcema = mongoose.Schema({
    name: {
        type:String, 
        required:true,
    },
    description: {
        type:String,
    },
    price:{
        type:Number, 
        required: true, 
        min: 0,
    },
    stock:{
        type:Number, 
        required: true, 
        min: 0,
    },
    category:{
        type:String, 
        required: true,
    },
    imageURL:{
        type:String,
    }
})

const ProductModel = mongoose.model('products', DataShcema);
module.exports = ProductModel;