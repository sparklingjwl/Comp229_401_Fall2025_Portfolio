import Contact from '../models/Contact.js';

// Get all contacts
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Get single contact by ID
export const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Create new contact
export const createContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        const savedContact = await contact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(400).json({ message: 'Bad Request', error });
    }
};

// Update contact by ID
export const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.json(contact);
    } catch (error) {
        res.status(400).json({ message: 'Bad Request', error });
    }
};

// Delete contact by ID
export const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Delete all contacts
export const deleteAllContacts = async (req, res) => {
    try {
        await Contact.deleteMany({});
        res.json({ message: 'All contacts deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error});
    }   
};