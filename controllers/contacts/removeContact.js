const { Contact } = require('../../models');
const createError = require('http-errors');

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw createError(404, 'Not found');
  }
  res.json({
    message: 'Contact deleted',
  });
};
module.exports = removeContact;
