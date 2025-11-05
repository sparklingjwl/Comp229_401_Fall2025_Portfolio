import express from 'express';
import {
    getContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact,
    deleteAllContacts
} from '../controllers/contactController.js';
import { authenticateToken } from '../middleware/auth.js';
import { requireAdmin } from '../middleware/admin.js';

const router = express.Router();

// Public routes
router.get('/', getContacts);
router.get('/:id', getContactById);

// Protected routes (authenticaed users only)
router.post('/', createContact);

// Admin routes
router.put('/:id', authenticateToken, requireAdmin, updateContact);
router.delete('/:id', authenticateToken, requireAdmin, deleteContact);
router.delete('/', authenticateToken, requireAdmin, deleteAllContacts);

export default router;