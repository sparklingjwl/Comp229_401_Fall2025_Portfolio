import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

// Portfolio Backend Server - Express API for full-stack portfolio application
// Provides RESTful APIs for portfolio data and authentication
// Connects React frontend with MongoDB database
// Supports JWT authentication and admin authorization

// Import MongoDB models
import Contact from './models/Contact.js';
import Project from './models/Project.js';
import Education from './models/Education.js';
import User from './models/User.js';

// Import API route handlers
import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import educationRoutes from './routes/educationRoutes.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';

// Import authentication middleware
import { authenticateToken } from './middleware/auth.js';

// Get current file path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file with explicit path
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies

// API Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', educationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Basic route to verify server and database status
app.get('/', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'Connected to MongoDB' : 'Disconnected from MongoDB';
  
  res.json({
    message: 'Portfolio Backend Server is running!', 
    database: dbStatus,
    mongodb: {
      connected: mongoose.connection.readyState === 1,
      databaseName: mongoose.connection.db?.databaseName || 'Not connected',
      collections: ['contacts', 'projects', 'qualifications', 'users']
    },
    timestamp: new Date().toDateString()
  });
});

// Test route: verifies all models are loaded correctly
app.get('/test-models', async (req, res) => {
  try {
    res.json({
      message: 'All 4 models loaded successfully!',
      models: {
        Contact: Contact.modelName,
        Project: Project.modelName,
        Education: Education.modelName,
        User: User.modelName
      },
      status: 'All 4 models are working!'
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Model test failed',
      message: error.message 
    });
  }
});

// Protected route example - demonstrates JWT authentication
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ 
    message: `This is a protected route`,
    user: req.user,
    timestamp: new Date().toISOString()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Test at: http://localhost:${PORT}/`);
});