const Cart = require('../Models/cartModel');

exports.create = async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    await newCart.save();
    res.status(201).json({ status: 'success', data: newCart });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const Carts = await Cart.find();
    res.status(200).json({ status: 'success', data: Carts });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ status: 'success', data: updatedCart });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
