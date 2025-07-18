const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

// Error handling
app.use(errorHandler);

// Start
connectDB();
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
