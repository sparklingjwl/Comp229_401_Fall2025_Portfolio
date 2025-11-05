import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Register new user
export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Prevent non-admin users from creating admin accounts
        if (role === 'admin' && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Only admins can create admin accounts' });
        }   

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user - only allow role if admin is creating
        const userData = { name, email, password };
        if (req.user.role === "admin" && role) {
            userData.role = role;
        }

        const user = new User(userData);
        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            {userId: user._id, email: user.email, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        );

        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                createdAt: user.createdAt
            }
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already in use' });
        }
        res.status(500).json({ message: 'Server error during registration', error });
    }
};

// Login user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check password 
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email }, 
            process.env.JWT_SECRET, 
            { expiresIn: '24h' }
        );

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                createdAt: user.createdAt
            }
        }); 
    } catch (error) {
        res.status(500).json({ message: 'Server error during login', error: error });
    }
};

// Logout (success message only, token handling is client-side)
export const logout = (req, res) => {
    res.json({ message: 'Logout successful' });
};

// Get current user profile
export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select('-password');
       if (!user) {
           return res.status(404).json({ message: 'User not found' });
       }
       res.json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Server error during profile retrieval', error });
    }
};

// Get all users (admin only)
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude passwords
        res.json({ users });
    } catch (error) {
        res.status(500).json({ message: 'Server error during user retrieval', error });
    }
};