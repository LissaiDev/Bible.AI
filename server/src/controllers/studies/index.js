const Study = require("../../models/Study");
const isLogged = require("../../utils/isLogged");
const { validationResult } = require("express-validator");
const getStudies = async (req, res) => {
  try {
    const studies = await Study.find();
    res.status(200).json(studies.reverse());
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
};

const getStudy = async (req, res) => {
  try {
    const study = await Study.findById(req.params.id);
    res.status(200).json(study);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
};

const createStudy = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(401)
      .json({ message: "Erro de validação", data: errors.array() });
  }
  const {
    title,
    nameMeaning,
    description,
    category,
    content,
    conclusion,
    recommendation,
  } = req.body;
  const user = isLogged(req);
  if (user) {
    try {
      const study = new Study({
        title,
        nameMeaning,
        description,
        category,
        content,
        conclusion,
        recommendation,
        createdBy: user.id,
        status:
          user.previlegies === "admin" || user.previlegies === "super-admin"
            ? "available"
            : "pending",
      });
      await study.save();
      console.log(study);
      res.status(200).json(study);
    } catch (e) {
      console.log(e.message);
      res.status(500).json(e.message);
    }
  } else {
    res.status(401).json({
      message: "Sem autorização",
      data: { error: "Sem autorização" },
    });
  }
};

module.exports = { getStudies, getStudy, createStudy };
