const jwt = require('jsonwebtoken');
const User = require('../models/User');


const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access denied, token missing!' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.userId; // store the user's id in req.user
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token!' });
  }
};

module.exports = authenticateToken;

