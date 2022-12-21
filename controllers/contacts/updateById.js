const { Contact } = require('../../models/contact');

const createError = require('http-errors');

const updateById = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const result = await Contact.findByIdAndUpdate(userId, id, req.body, {
    new: true,
  });
  if (!result) {
    throw createError(404, 'Not found');
  }
  res.json(result);
};
module.exports = updateById;
