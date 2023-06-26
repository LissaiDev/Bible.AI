const express = require("express");
const { createUser, logUser } = require("../../controllers/user");
const {signIn, logIn} = require("../../utils/userValidation");
const router = express.Router();
router.post("/createUser",signIn,createUser);
router.post("/logIn",logIn,logUser);
module.exports = router;