import express from 'express';
import {
    getEducation,
    getEducationById,
    createEducation,
    updateEducation,
    deleteEducation,
    deleteAllEducation
} from '../controllers/educationController.js';
import { authenticateToken } from '../middleware/auth.js';
import { requireAdmin } from '../middleware/admin.js';

const router = express.Router();

// Public routes
router.get('/', getEducation);
router.get('/:id', getEducationById);

// Admin routes
router.post('/', authenticateToken, requireAdmin, createEducation);
router.put('/:id', authenticateToken, requireAdmin, updateEducation);
router.delete('/:id', authenticateToken, requireAdmin, deleteEducation);
router.delete('/', authenticateToken, requireAdmin, deleteAllEducation);

export default router;