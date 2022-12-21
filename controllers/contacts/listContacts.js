const { Contact } = require('../../models/contact');

const listContacts = async (req, res) => {
  const { _id: userId } = req.user;
  const { page = 1, limit = 10, favorite: reqFavorite = null } = req.query;
  const skip = (page - 1) * limit;
  const favorite = reqFavorite === null ? { $exists: true } : reqFavorite;
  const contacts = await Contact.find(
    { owner: userId, favorite },
    '-createdAt -updatedAt',
    {
      skip,
      limit: Number(limit),
    }
  ).populate('owner', 'userId email');
  res.json({ contacts, skip, limit });
};
module.exports = listContacts;
