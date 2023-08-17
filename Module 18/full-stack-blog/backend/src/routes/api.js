const express = require('express');
const { CreatePost, ReadPost, UpdatePost, DeletePost } = require('../controllers/PostControllers');
const router = express.Router();

router.post("/CreatePost", CreatePost);
router.get("/ReadPost",ReadPost);
router.post("/UpdatePost/:id",UpdatePost);
router.post("/DeletePost/:id",DeletePost)

module.exports = router;