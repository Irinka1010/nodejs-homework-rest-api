const validationBody = schema => {
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

module.exports = validationBody;
