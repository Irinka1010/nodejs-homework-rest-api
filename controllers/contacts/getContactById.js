const { Contact } = require('../../models');
const createError = require('http-errors');
const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw createError(404, 'Not found');
  }
  res.json(result);
};
module.exports = getContactById;
