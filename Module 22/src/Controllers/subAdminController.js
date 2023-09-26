const SubAdmin = require('../Models/subAdminModel');

exports.create = async (req, res) => {
  try {
    const newSubAdmin = new SubAdmin(req.body);
    await newSubAdmin.save();
    res.status(201).json({ status: 'success', data: newSubAdmin });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const SubAdmins = await SubAdmin.find();
    res.status(200).json({ status: 'success', data: SubAdmins });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await SubAdmin.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedSubAdmin = await SubAdmin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ status: 'success', data: updatedSubAdmin });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
