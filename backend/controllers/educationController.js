import Education from '../models/Education.js';
// Education controller - Handles all education-related CRUD operations
// Public: GET routes (portfolio visitors can view education entries)
// Admin only: POST, PUT, DELETE routes (protected by admin middleware)

// Get all education entries (Public - displays on portfolio)
export const getEducation = async (req, res) => {
    try {
        const education = await Education.find();
        res.json(education);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get single education by ID
export const getEducationById = async (req, res) => {
    try {
        const education = await Education.findById(req.params.id);
        if (!education) {
            return res.status(404).json({ message: 'Education not found' });
        }
        res.json(education);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Create new education entry (Admin only - add new qualifications)
export const createEducation = async (req, res) => {
    try {
        const newEducation = new Education(req.body);
        await newEducation.save();
        res.status(201).json(newEducation);
    } catch (error) {
        res.status(400).json({ message: 'Bad Request', error });
    }
};

// Update education by ID
export const updateEducation = async (req, res) => {
    try {
        const updatedEducation = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEducation) {
            return res.status(404).json({ message: 'Education not found' });
        }
        res.json(updatedEducation);
    } catch (error) {
        res.status(400).json({ message: 'Bad Request', error });
    }
};

// Delete education by ID
export const deleteEducation = async (req, res) => {
    try {
        const deletedEducation = await Education.findByIdAndDelete(req.params.id);
        if (!deletedEducation) {
            return res.status(404).json({ message: 'Education not found' });
        }
        res.json({ message: 'Education deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Delete all education records (Admin only)
export const deleteAllEducation = async (req, res) => {
    try {
        await Education.deleteMany({});
        res.json({ message: 'All education records deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};