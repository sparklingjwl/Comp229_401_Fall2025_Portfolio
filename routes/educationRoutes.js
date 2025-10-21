import express from 'express';
import {
    getEducation,
    getEducationById,
    createEducation,
    updateEducation,
    deleteEducation,
    deleteAllEducation
} from '../controllers/educationController.js';

const router = express.Router();

router.get('/', getEducation);
router.get('/:id', getEducationById);
router.post('/', createEducation);
router.put('/:id', updateEducation);
router.delete('/:id', deleteEducation);
router.delete('/', deleteAllEducation);

export default router;