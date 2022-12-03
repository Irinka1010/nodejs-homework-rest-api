const ctrlWrapper = ctrl => {
  return async (req, res, nex) => {
    try {
      await ctrl(req, res, nex);
    } catch (error) {
      nex(error);
    }
  };
};
module.exports = ctrlWrapper;
