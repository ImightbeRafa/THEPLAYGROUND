// File: routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Define routes
router.get('/', blogController.getAllBlogs);
router.post('/', blogController.createBlog);

module.exports = router;