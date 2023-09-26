const User = require('../Models/userModel');

exports.create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ status: 'success', data: newUser });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ status: 'success', data: users });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ status: 'success', data: updatedUser });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
