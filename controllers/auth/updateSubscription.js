const { User } = require('../../models/user');
const createError = require('http-errors');
const updateSubscription = async (req, res) => {
  const { id } = req.user;
  const data = await User.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  if (!data) {
    throw createError(404, 'Not found');
  }
  res.status(200).json({
    status: 'success',
    cod: 200,
    data: {
      user: {
        emeil: data.emeil,
        subscription: data.subscription,
      },
    },
  });
};
module.exports = updateSubscription;
