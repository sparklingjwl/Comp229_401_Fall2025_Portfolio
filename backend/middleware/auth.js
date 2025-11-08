import jwt from 'jsonwebtoken';
// JWT Authentication Middleware - Verifies Bearer tokens
// Protects routes by ensuring valid JWT is provided

// Middleware to authenticate JWT token
export const authenticateToken = (req, res, next) => {
  // Get token from Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); // Unauthorized - no token provided
  }

  // Verify token signature and expiration
  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return res.sendStatus(403); // Forbidden - Invalide or expired token
    }
    req.user = user; // Attach user info from token to request object
    next();
  });
};
