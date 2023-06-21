const Study = require("../../models/Study");

const getStudies = async (req, res) => {
  try {
    const studies = await Study.find();
    console.log(studies);
    res.status(200).json(studies.reverse())
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
};

const getStudy = async (req, res) => {
  try {
    const study = await Study.findById(req.params.id);
    console.log(study);
    res.status(200).json(study);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
};

module.exports = { getStudies, getStudy };
