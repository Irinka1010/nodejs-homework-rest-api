const express = require('express');

const {
  validationBody,
  controllerWrapper,
  auth,
  upload,
} = require('../../middlewares');
const { auth: controllers } = require('../../controllers');
const { schemas } = require('../../models/user');

const router = express.Router();

router.post(
  '/signup',
  validationBody(schemas.joiSignupSchema),
  controllerWrapper(controllers.signup)
);

router.get(
  '/verify/:verificationToken',
  controllerWrapper(controllers.verifyEmail)
);
router.post(
  '/verify',
  validationBody(schemas.verifySchema),
  controllerWrapper(controllers.resendEmail)
);
router.post(
  '/login',
  validationBody(schemas.joiLoginSchema),
  controllerWrapper(controllers.login)
);
router.get(
  '/current',
  controllerWrapper(auth),
  controllerWrapper(controllers.getCurrent)
);
router.get(
  '/logout',
  controllerWrapper(auth),
  controllerWrapper(controllers.logout)
);
router.patch(
  '/',
  controllerWrapper(auth),
  controllerWrapper(controllers.updateSubscription)
);
router.patch(
  '/avatars',
  controllerWrapper(auth),
  upload.single('avatar'),
  controllerWrapper(controllers.updateAvatar)
);
module.exports = router;
