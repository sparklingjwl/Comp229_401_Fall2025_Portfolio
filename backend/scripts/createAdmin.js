import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

// admin User Creation Script
// Creates a hardcoded admin user for the portfolio application
// Run with: npm run create-admin (from backend folder)

const createAdminUser = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin already exists to prevent duplicates
    const existingAdmin = await User.findOne({ email: 'admin@portfolio.com' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    // Create admin user - password will be hashed by User model
    const adminUser = new User({
      name: 'Portfolio Admin',
      email: 'admin@portfolio.com',
      password: 'admin123', // Will be hashed automatically
      role: 'admin'
    });

    await adminUser.save();
    console.log('Admin user created successfully:');
    console.log('Email: admin@portfolio.com');
    console.log('Password: admin123');
    console.log('Role: admin');

  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

createAdminUser();