import User from '../models/User.js';
// Admin Middleware - Protects routes to allow only admin users
// Must be used AFTER authenticateToken middleware
// Checks if authenticated user has admin role


export const requireAdmin = async (req, res, next) => {
    try {
        // Get user from database using ID from JWT token
        const user = await User.findById(req.user.userId);

        if (!user ) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if user role is admin
        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }

        // User is admin, proceed to next middleware/controller
        req.user.role = user.role;
        next();
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
