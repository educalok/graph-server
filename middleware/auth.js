const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const authenticate = (req, res, next) => {
  // Extract the token from the request header (with the format 'Bearer token', so a split is done to keep only the second part).
  const token = req.headers.authorization?.split(' ')[1] || '';

  try {
    // Token verification, which must use validation with the secret word signature. If invalid, it results in an error and falls into the catch block.
    const verified = jwt.verify(token, JWT_SECRET);
    // If the decoding is successful, the user data is taken and saved in the request object to be used in mutations/queries.
    req.verifiedUser = verified.user;
    next();
  } catch  {
    // If token verification fails, respond with an unauthorized error
    res.status(401).json({ message: 'Unauthorized' });
  }
};
// Whether the encoding is successful or not, the next callback is called to continue with the request execution.

module.exports = {
  authenticate,
};
