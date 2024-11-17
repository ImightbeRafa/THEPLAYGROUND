# ThePlayground

A modern web platform built with Express.js and MongoDB, featuring blog functionality, portfolio showcase, and interactive UI elements.

## 🚀 Features

- Modern, responsive design
- Blog system with MongoDB integration
- Interactive binary rain animation
- Portfolio showcase
- Contact system
- Secure implementation with Helmet and CORS
- EJS templating with layouts

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Template Engine**: EJS with express-ejs-layouts
- **Security**: Helmet, CORS
- **Development**: Nodemon
- **Logging**: Morgan
- **Styling**: Custom CSS with Font Awesome integration

## 📦 Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd theplayground
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/theplayground
NODE_ENV=development
```

4. Create required directories:
```bash
mkdir -p config controllers models public/{css,js,images} routes views/{layouts,partials}
```

## 🏗 Project Structure

```
theplayground/
├── config/
│   └── db.js                 # Database configuration
├── controllers/
│   └── blogController.js     # Blog route controllers
├── models/
│   └── Blog.js              # Blog database model
├── public/
│   ├── css/
│   │   └── style.css        # Main stylesheet
│   ├── js/
│   │   └── binaryRain.js    # Binary rain animation
│   └── images/
│       └── LOGO.png         # Site logo
├── routes/
│   └── blogRoutes.js        # Blog route definitions
├── views/
│   ├── layouts/
│   │   └── main.ejs         # Main layout template
│   ├── partials/
│   │   ├── header.ejs       # Header partial
│   │   └── footer.ejs       # Footer partial
│   ├── index.ejs            # Home page
│   └── blogs.ejs            # Blog listing page
├── .env                     # Environment variables
├── .gitignore              # Git ignore file
└── app.js                  # Main application file
```

## 🚦 Running the Project

### Development mode:
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

## 🔧 Troubleshooting

If you encounter any issues, try these common solutions:

1. **Port Already in Use**:
```bash
killall node
# or
sudo lsof -i :3000
kill -9 <PID>
```

2. **Layout Not Found**:
- Verify the views directory structure
- Check express-ejs-layouts configuration

3. **Static Files Not Loading**:
- Verify the public directory setup
- Check file paths in your HTML/EJS files

4. **MongoDB Connection Issues**:
- Ensure MongoDB is running
- Verify connection string in .env file

## 🛣 Available Routes

- `/` - Home page
- `/blogs` - Blog listings
- `/portfolio` - Portfolio showcase (placeholder)
- `/contact` - Contact form (placeholder)

## 🔒 Security

The application implements several security measures:
- Helmet for HTTP headers security
- CORS protection
- Environment variables for sensitive data
- Secure MongoDB connection

## 🎯 Upcoming Features

- [ ] Complete portfolio section
- [ ] Implement contact functionality
- [ ] Enhanced blog features
- [ ] User authentication
- [ ] Image upload capability
- [ ] SEO optimization
- [ ] Caching implementation
- [ ] Testing suite

## 💻 Development

To contribute to this project:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Dependencies

```json
{
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "ejs": "^3.1.10",
  "express": "^4.21.1",
  "express-ejs-layouts": "^2.5.1",
  "helmet": "^8.0.0",
  "mongoose": "^8.8.1",
  "morgan": "^1.10.0",
  "nodemon": "^3.1.7"
}
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is [MIT](LICENSE) licensed.

## ✨ Acknowledgments

- Express.js documentation
- MongoDB documentation
- EJS documentation
- Node.js community

---

Made with ❤️ by [Your Name]