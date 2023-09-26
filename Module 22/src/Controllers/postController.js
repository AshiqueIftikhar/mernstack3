const Post = require('../Models/postModel');

exports.create = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json({ status: 'success', data: newPost });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.read = async (req, res) => {
  try {
    const Posts = await Post.find();
    res.status(200).json({ status: 'success', data: Posts });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ status: 'success', data: updatedPost });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
