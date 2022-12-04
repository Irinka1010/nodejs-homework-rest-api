const controllerWrapper = controller => {
  return async (req, res, nex) => {
    try {
      await controller(req, res, nex);
    } catch (error) {
      nex(error);
    }
  };
};
module.exports = controllerWrapper;
