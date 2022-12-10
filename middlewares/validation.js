const validation = schema => {
  return (req, res, nex) => {
    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      nex(error);
      return;
    }
    nex();
  };
};

const paramsValidation = schema => {
  return (req, res, next) => {
    const { error } = schema.validate(req.params);
    if (error) {
      error.status = 400;
      next(error);
      return;
    }
    next();
  };
};

module.exports = {
  paramsValidation,
  validation,
};
