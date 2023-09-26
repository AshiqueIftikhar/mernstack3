const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;