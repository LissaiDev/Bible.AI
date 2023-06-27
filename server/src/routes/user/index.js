const express = require("express");
const { createUser, logUser, logOut } = require("../../controllers/user");
const {signIn, logIn} = require("../../utils/userValidation");
const router = express.Router();
router.post("/createUser",signIn,createUser);
router.post("/logIn",logIn,logUser);
router.get("/logout", logOut);
module.exports = router;