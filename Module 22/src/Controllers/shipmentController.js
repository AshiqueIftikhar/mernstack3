const Shipment = require('../Models/shipmentModel');

exports.create = async (req, res) => {
  try {
    const newShipment = new Shipment(req.body);
    await newShipment.save();
    res.status(201).json({ status: 'success', data: newShipment });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const Shipments = await Shipment.find();
    res.status(200).json({ status: 'success', data: Shipments });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Shipment.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedShipment = await Shipment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ status: 'success', data: updatedShipment });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
