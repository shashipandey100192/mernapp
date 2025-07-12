// const jwt = require('jsonwebtoken');

// function verifyToken(req, res, next) {
//   const JWT_SECRET = 'shashipandey';

//   const token = req.headers['x-access-token'] || req.headers['authorization'];

//   if (!token) return res.status(403).send('Token is required');

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = decoded;
//     next(); // proceed to route
//   } catch (err) {
//     res.status(401).send('Invalid Token');
//   }
// }

// module.exports = verifyToken;



const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const JWT_SECRET = 'shashipandey';

  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (!token) {
    return res.status(403).send('Token is required');
  }

  // If header format is "Bearer <token>", split and take actual token
  if (token.startsWith('Bearer ')) {
    token = token.split(' ')[1];
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('JWT verify error:', err.name, err.message);
    // res.status(401).send('Invalid Token');
      res.status(420).json({message:"selected data removed",status:421});
  }
}
module.exports = verifyToken;
