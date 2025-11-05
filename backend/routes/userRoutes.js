import express from 'express';
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    deleteAllUsers
} from '../controllers/userController.js';
import { authenticateToken } from '../middleware/auth.js';
import { requireAdmin } from '../middleware/admin.js';

const router = express.Router();

// All user routes are admin only
router.get('/', authenticateToken, requireAdmin, getUsers);
router.get('/:id', authenticateToken, requireAdmin, getUserById);
router.post('/', authenticateToken, requireAdmin, createUser);
router.put('/:id', authenticateToken, requireAdmin, updateUser);
router.delete('/:id', authenticateToken, requireAdmin, deleteUser);
router.delete('/', authenticateToken, requireAdmin, deleteAllUsers);

export default router;