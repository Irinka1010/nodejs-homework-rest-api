const { isValidObjectId } = require('mongoose');
const createError = require('http-errors');
const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(createError(404, 'Invalid id'));
  }
  next();
};
module.exports = isValidId;
