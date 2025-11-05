import User from '../models/User.js';

export const requireAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.userId);

        if (!user ) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }

        req.user.role = user.role;
        next();
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
