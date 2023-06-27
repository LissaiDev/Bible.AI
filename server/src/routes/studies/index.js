const express = require("express");
const { createStudy, getStudies, getStudy} = require("../../controllers/studies");
const studiesValidation = require("../../utils/studiesValidation");
const router = express.Router();
router.get("/",getStudies);
router.get("/:id",getStudy);
router.post("/",studiesValidation,createStudy);
module.exports = router
