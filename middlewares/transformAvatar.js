const jimp = require('jimp');

const transformAvatar = async pathFile => {
  const img = await jimp.read(pathFile);
  await img
    .autocrop()
    .cover(250, 250, jimp.HORIZONTAL_ALIGN_CENTER || jimp.VERTICAL_ALIGN_MIDDLE)
    .writeAsync(pathFile);
  console.log(pathFile);
};
module.exports = transformAvatar;
