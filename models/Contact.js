import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    firstname: {
        type: String, 
        required: [true, 'First name is required'],
        trim: true
    },
    lastname: {
        type: String, 
        required: [true, 'Last name is required'],
        trim: true
    },
    email: {
        type: String, 
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    contactNumber: {
        type: String,
        trim: true,
        // Optional field - not required       
    },
    message: {
        type: String, 
        trim: true,
        // Optional field - not required
    },
}, { 
    timestamps: true 
});
const Contact = mongoose.model('Contact', contactSchema);

export default Contact;