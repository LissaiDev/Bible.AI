const express = require("express");
const { createStudy, getStudies, getStudy, updateStatus, deleteStudy, dev} = require("../../controllers/studies");
const studiesValidation = require("../../utils/studiesValidation");
const router = express.Router();
router.get("/",getStudies);
router.get("/:id",getStudy);
router.post("/",studiesValidation,createStudy);
router.put("/updateStatus/:id",updateStatus);
router.delete("/delete/:id",deleteStudy);
module.exports = router
