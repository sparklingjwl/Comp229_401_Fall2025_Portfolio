import Project from '../models/Project.js';

// Get all projects
export const getProjects = async (req, res) => {
    try {
        const project = await Project.find();
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get single project by ID
export const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        return res.status(500).json({ message: 'Server Error', error });
    }
};

// Create new project
export const createProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: 'Bad Request', error });
    }
};

// Update project by ID
export const updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(updatedProject);
    } catch (error) {
        return res.status(400).json({ message: 'Bad Request', error });
    }
};

// Delete project by ID
export const deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Server Error', error });
    }
};

// Delete all projects
export const deleteAllProjects = async (req, res) => {
    try {
        await Project.deleteMany({});
        res.json({ message: 'All projects deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};