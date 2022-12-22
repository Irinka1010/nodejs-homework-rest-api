const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const createError = require('http-errors');
const { SECRET_KEY } = process.env;
const auth = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');
  if (bearer !== 'Bearer') {
    throw createError(401, 'Not authorized');
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || user.token !== token) {
      throw createError(401, 'Not authorized');
    }
    req.user = user;
    next();
  } catch (error) {
    if (error.messege === 'Invalid sugnature') {
      error.status = 401;
    }
    next(error);
  }
};
module.exports = auth;
