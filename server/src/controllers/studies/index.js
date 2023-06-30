const { isValidObjectId } = require("mongoose");
const Study = require("../../models/Study");
const isLogged = require("../../utils/isLogged");
const { validationResult } = require("express-validator");
const getStudies = async (req, res) => {
  try {
    const studies = await Study.find({status: "available"});
    res.status(200).json(studies.reverse());
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
};

const getStudy = async (req, res) => {
  try {
    if (isValidObjectId(req.params.id)) {
      const study = await Study.findById(req.params.id);
      res.status(200).json(study);
    } else {
      res.status(404).json({ message: "Study not found" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
};

const createStudy = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
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
  console.log(user);
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
      res.status(200).json({message: "Estudo criado com sucesso", study});
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

const updateStatus = async (req, res) => {
  const user = isLogged(req);
  try {
    if (
      (user?.previlegies === "admin" || user?.previlegies === "super-admin") &&
      isValidObjectId(req.params.id)
    ) {
      const study = await Study.findById(req.params.id);
      study.status = req.body.status;
      await study.save();
      res.status(200).json({ message: "Status atualizado com sucesso" });
    } else {
      res.status(401).json({
        message: "Sem autorização ou Id inválido",
        data: { error: "Sem autorização ou Id inválido" },
      });
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "erro", data: { error: e.message } });
  }
};

const deleteStudy = async (req, res) => {
  const user = isLogged(req);
  try {
    if (
      (user?.previlegies === "admin" || user?.previlegies === "super-admin") &&
      isValidObjectId(req.params.id)
    ) {
      await Study.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Estudo removido com sucesso" });
    } else {
      res.status(401).json({
        message: "Sem autorização ou Id inválido",
        data: { error: "Sem autorização ou Id inválido" },
      });
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "erro", data: { error: e.message } });
  }
};

module.exports = {
  getStudies,
  getStudy,
  createStudy,
  updateStatus,
  deleteStudy,
};
