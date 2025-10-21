import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
    institution: {
        type: String,
        required: true,
        trim: true
    },
    degree: {
        type: String,
        required: true,
        trim: true
    },
    dates: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    gpa: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        required: false,
        trim: true
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

const Education = mongoose.model('Education', educationSchema);

export default Education;