const express = require('express');

const { validation, controllerWrapper, auth } = require('../../middlewares');
const { auth: controllers } = require('../../controllers');
const { joiLoginSchema, joiSignupSchema } = require('../../models/user');

const router = express.Router();

router.post(
  '/signup',
  validation(joiSignupSchema),
  controllerWrapper(controllers.signup)
);
router.post(
  '/login',
  validation(joiLoginSchema),
  controllerWrapper(controllers.login)
);
router.get('/current', auth, controllerWrapper(controllers.getCurrent));
router.get('/logout', auth, controllerWrapper(controllers.logout));
router.patch('/', auth, controllerWrapper(controllers.updateSubscription));
module.exports = router;
