const express = require('express');

const {
  validationBody,
  controllerWrapper,
  auth,
} = require('../../middlewares');
const { auth: controllers } = require('../../controllers');
const { schemas } = require('../../models/user');

const router = express.Router();

router.post(
  '/signup',
  validationBody(schemas.joiSignupSchema),
  controllerWrapper(controllers.signup)
);
router.post(
  '/login',
  validationBody(schemas.joiLoginSchema),
  controllerWrapper(controllers.login)
);
router.get('/current', auth, controllerWrapper(controllers.getCurrent));
router.get('/logout', auth, controllerWrapper(controllers.logout));
router.patch('/', auth, controllerWrapper(controllers.updateSubscription));
module.exports = router;
