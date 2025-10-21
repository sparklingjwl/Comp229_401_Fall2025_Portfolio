import express from 'express';
import {
    register,
    login,
    logout,
    getProfile
} from '../controllers/authController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// Protected route (requires valid JWT token)
router.get('/profile', authenticateToken, getProfile);

export default router;