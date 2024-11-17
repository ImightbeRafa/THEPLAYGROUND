const Blog = require('../models/Blog');

const blogController = {
    getAllBlogs: async (req, res) => {
        try {
            const blogs = await Blog.find().sort({ createdAt: -1 });
            res.render('blogs', { title: 'Blogs', blogs });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createBlog: async (req, res) => {
        try {
            const blog = new Blog(req.body);
            await blog.save();
            res.status(201).json(blog);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = blogController;