import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: [{
        type: String
    }],
    githubUrl: {
        type: String
    },
    liveUrl: {
        type: String
    },
    image: {
        type: String
    },
    firstname: {
        type: String, 
        required: false,
        trim: true
    },
    lastname: {
        type: String, 
        required: false,
        trim: true
    },
    email: {
        type: String, 
        required: false,
        trim: true
    },
    completion: {
        type: Date,
        default: Date.now
    }
}, { 
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

export default Project;