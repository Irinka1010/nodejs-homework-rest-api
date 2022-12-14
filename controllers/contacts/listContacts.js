const { Contact } = require('../../models');

const listContacts = async (req, res) => {
  const contacts = await Contact.find({}, '-createdAt -updatedAt');
  res.json(contacts);
};
module.exports = listContacts;
