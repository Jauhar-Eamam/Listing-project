# Listing Project

A full-stack web application for listing and reviewing properties. Built with Node.js, Express, and MongoDB, this platform allows users to create listings, browse properties, leave reviews, and manage their accounts.

## 🌟 Features

- **User Authentication**: Secure user registration and login using Passport.js with local strategy
- **Listing Management**: Create, read, update, and delete property listings
- **Review System**: Users can rate and review listings
- **Image Upload**: Cloudinary integration for seamless image uploads
- **Session Management**: Persistent user sessions with MongoDB session store
- **Data Validation**: Server-side validation using Joi schema validation
- **Error Handling**: Comprehensive error handling and flash messaging
- **EJS Templating**: Dynamic server-side rendering with EJS and EJS-Mate
- **RESTful API**: Clean REST API architecture for all operations

## 🛠️ Tech Stack

### Backend
- **Node.js** (v22.21.0)
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Passport.js** - Authentication middleware

### Frontend
- **EJS** - Templating engine
- **EJS-Mate** - Layout and templating utilities
- **CSS/HTML** - Markup and styling

### External Services
- **Cloudinary** - Image hosting and management
- **MongoDB Atlas** - Cloud database

### Additional Libraries
- **express-session** - Session management
- **connect-mongo** - MongoDB session store
- **multer** - File upload handling
- **joi** - Data validation
- **connect-flash** - Flash messaging
- **method-override** - HTTP method override support
- **dotenv** - Environment configuration

## 📋 Prerequisites

Before running the project, ensure you have:

- Node.js v22.21.0 or higher
- MongoDB Atlas account (for database)
- Cloudinary account (for image uploads)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Listing-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the project root
   ```
   NODE_ENV=production
   ATLASDB_URL=<your-mongodb-atlas-url>
   SECRET=<your-session-secret>
   CLOUDINARY_NAME=<your-cloudinary-name>
   CLOUDINARY_KEY=<your-cloudinary-key>
   CLOUDINARY_SECRET=<your-cloudinary-secret>
   ```

4. **Start the server**
   ```bash
   node app.js
   ```

The application will be running on `http://localhost:8080`

## 📁 Project Structure

```
Listing-project/
├── app.js                 # Main application entry point
├── schema.js              # Joi validation schemas
├── middleware.js          # Custom middleware functions
├── cloudConfig.js         # Cloudinary configuration
├── package.json           # Project dependencies
├── controllers/           # Route controllers
├── models/                # Mongoose schemas
├── routes/                # API routes
│   ├── listing.js         # Listing routes
│   ├── review.js          # Review routes
│   └── user.js            # User authentication routes
├── views/                 # EJS templates
├── public/                # Static files (CSS, JS, images)
├── utils/                 # Utility functions
├── init/                  # Database initialization scripts
└── README.md              # Project documentation
```

## 📚 API Endpoints

### Listings
- `GET /listings` - Get all listings
- `GET /listings/:id` - Get a specific listing
- `POST /listings` - Create a new listing
- `PUT /listings/:id` - Update a listing
- `DELETE /listings/:id` - Delete a listing

### Reviews
- `POST /listings/:id/reviews` - Add a review to a listing
- `DELETE /listings/:id/reviews/:reviewId` - Delete a review

### Users
- `GET /signup` - User registration page
- `POST /signup` - Register a new user
- `GET /login` - User login page
- `POST /login` - Authenticate user
- `GET /logout` - Log out user

## 🔒 Authentication

The application uses Passport.js with the local strategy for authentication. User credentials are securely stored in MongoDB using passport-local-mongoose, which handles password hashing and salt.

## 📝 Data Validation

Server-side validation is implemented using Joi schemas for:
- **Listings**: Title, description, location, country, price, and image
- **Reviews**: Rating (1-5) and comment text

## 💾 Database

The project uses MongoDB Atlas for data storage. Session data is persisted using connect-mongo to maintain user sessions across server restarts.

## 🖼️ Image Management

Images are uploaded to Cloudinary for optimized storage and delivery. The application uses multer for handling file uploads and multer-storage-cloudinary for cloud integration.

## ⚙️ Configuration

Environment variables are managed through `.env` file using dotenv. In development mode, the `.env` file is automatically loaded. In production, ensure all environment variables are properly set.

## 📦 Dependencies

See `package.json` for a complete list of dependencies and their versions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📄 License

This project is licensed under the ISC License. See the LICENSE file for more information.

## 👤 Author

**Jauhar-Eamam**

## 🎯 Future Enhancements

- User profile management
- Advanced search and filtering
- Rating system improvements
- Payment integration
- Email notifications
- Admin dashboard

## 📞 Support

For support, please create an issue in the repository.

---

**Last Updated**: May 15, 2026
