const multer = require('multer');
const path = require('path');
const tempDir = path.join(__dirname, '../', 'temp');
const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: multerConfig,
  limits: {
    fileSize: 500000,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes('image')) {
      cb(null, true);
      return;
    }
    cb(new Error('Wrong format file for avatar!'));
  },
});
module.exports = upload;
