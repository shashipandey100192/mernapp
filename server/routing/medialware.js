const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const JWT_SECRET = 'shashipandey';

  const token = req.headers['x-access-token'] || req.headers['authorization'];

  if (!token) return res.status(403).send('Token is required');

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next(); // proceed to route
  } catch (err) {
    res.status(401).send('Invalid Token');
  }
}

module.exports = verifyToken;