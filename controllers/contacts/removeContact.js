const { Contact } = require('../../models/contact');
const createError = require('http-errors');

const removeContact = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const result = await Contact.findByIdAndRemove(userId, id);
  if (!result) {
    throw createError(404, 'Not found');
  }
  res.json({
    message: 'Contact deleted',
  });
};
module.exports = removeContact;
