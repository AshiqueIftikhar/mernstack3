const Product = require('../Models/productModel');

exports.create = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ status: 'success', data: newProduct });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const Products = await Product.find();
    res.status(200).json({ status: 'success', data: Products });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ status: 'success', data: updatedProduct });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
