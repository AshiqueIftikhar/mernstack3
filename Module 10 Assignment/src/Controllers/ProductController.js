const Product = require('../Models/ProductModel');

exports.getProduct= async (req, res) => {
  try {
    const products = await Product.find({}, 'name price');
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } 
};


