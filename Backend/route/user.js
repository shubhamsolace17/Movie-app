const express = require('express');
const router = express.Router()
const userController = require("../controller/user");
const auth  =require("../middleware/auth");

router.post('/user-registration', userController.userRegistration);
router.post('/user-signin', userController.userSignIn);


module.exports = router;