const { Contact } = require('../../models/contact');
const createError = require('http-errors');
const getContactById = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const result = await Contact.findById(id, userId);
  if (!result) {
    throw createError(404, 'Not found');
  }
  res.json(result);
};
module.exports = getContactById;
