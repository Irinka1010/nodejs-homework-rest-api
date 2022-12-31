const { User } = require('../../models/user');
const path = require('path');
const fs = require('fs/promises');
const transformAvatar = require('../../middlewares/transformAvatar');

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars');
const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const imageNeme = `${id}_${originalname}`;

  try {
    const resultUpload = path.join(avatarsDir, imageNeme);
    await transformAvatar(tempUpload);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join('public', 'avatars', imageNeme);
    await User.findByIdAndUpdate(req.user._id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;
