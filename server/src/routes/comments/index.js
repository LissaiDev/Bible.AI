const express = require("express");
const comments = require("../../controllers/comments");
const router = express.Router();
router.post("/",comments )
module.exports = router