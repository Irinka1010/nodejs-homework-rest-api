const { contacts: contactsOperations } = require('../../models');
const createError = require('http-errors');

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperations.removeContact(id);
  if (!result) {
    throw createError(404, 'Not found');
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'contact deleted',
    data: {
      result,
    },
  });
};
module.exports = removeContact;
