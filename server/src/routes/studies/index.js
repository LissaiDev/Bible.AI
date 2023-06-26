const express = require("express");
const { createStudy, getStudies, getStudy} = require("../../controllers/studies");
const router = express.Router();
router.get("/",getStudies);
router.get("/:id",getStudy);
router.post("/",createStudy);
module.exports = router
