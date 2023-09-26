const Order_Item = require('../Models/order_itemModel');

exports.create = async (req, res) => {
  try {
    const newOrder_Item = new Order_Item(req.body);
    await newOrder_Item.save();
    res.status(201).json({ status: 'success', data: newOrder_Item });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const Order_Items = await Order_Item.find();
    res.status(200).json({ status: 'success', data: Order_Items });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Order_Item.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedOrder_Item = await Order_Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ status: 'success', data: updatedOrder_Item });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
