const jwt = require('jsonwebtoken');

exports.generateToken = function generateToken(userId, secretKey) {
  const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
  return token;
}


exports.authenticate = function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Authorization token is missing' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Invalid token' });
  }
}


