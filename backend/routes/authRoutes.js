import express from 'express';
import {
    register,
    login,
    logout,
    getProfile,
    getAllUsers
} from '../controllers/authController.js';
import { authenticateToken } from '../middleware/auth.js';
import { requireAdmin } from '../middleware/admin.js';

const router = express.Router();

// Public routes
router.post('/login', login);
router.post('/logout', logout);

// Protected route (only authenticated users)
router.get('/profile', authenticateToken, getProfile);

// Admin routes
router.post('/register', authenticateToken, requireAdmin,  register);
router.get('/users', authenticateToken, requireAdmin, getAllUsers);

export default router;