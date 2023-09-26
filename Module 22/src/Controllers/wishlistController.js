const Wishlist = require('../Models/wishlistModel');

exports.create = async (req, res) => {
  try {
    const newWishlist = new Wishlist(req.body);
    await newWishlist.save();
    res.status(201).json({ status: 'success', data: newWishlist });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const Wishlists = await Wishlist.find();
    res.status(200).json({ status: 'success', data: Wishlists });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedWishlist = await Wishlist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ status: 'success', data: updatedWishlist });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
