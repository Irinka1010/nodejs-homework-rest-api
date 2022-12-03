const contactsOperations = require('../../models');

const createError = require('http-errors');

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperations.updateById(id, req.body);
  if (!result) {
    throw createError(404, `Contact with id=${id} not found `);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = updateById;
