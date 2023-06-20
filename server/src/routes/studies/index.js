const express = require("express");
const studies = require("../../controllers/studies");
const createStudy = require("../../controllers/createStudy");
const router = express.Router();
router.get("/",studies.getStudies);
router.get("/:id",studies.getStudy);
router.post("/", createStudy);
module.exports = router
