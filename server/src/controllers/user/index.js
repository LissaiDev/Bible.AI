const User = require("../../models/User");
const { validationResult } = require("express-validator");
const isLogged = require("../../utils/isLogged");
const { hash, compare } = require("../../utils/hash");
const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
  const { name, password, previlegies } = req.body;
  console.log(req.cookies);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(401)
      .json({ message: "Erro de validação", data: errors.array() });
  }
  try {
    const user = isLogged(req);
    if (user) {
      if (user.previlegies === "super-admin" || user.previlegies === "admin") {
        const newUser = new User({
          name: name,
          password: hash(password),
          previlegies: previlegies,
          createdBy: user._id,
        });
        await newUser.save();
        return res
          .status(200)
          .json({ message: "Usuário criado com sucesso", data: newUser });
      }
    } else {
      return res.status(401).json({
        message: "Sem autorização",
        data: { error: "Sem autorização" },
      });
    }
  } catch (e) {
    return res.status(500).json({ message: "erro", data: { error: e.message } });
  }
};

const logUser = async (req, res) => {
  const { name, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(401)
      .json({ message: "Erro de validação", data: errors.array() });
  }
  try {
    const user = await User.findOne({ name });
    if (user) {
      if (compare(password, user.password)) {
        const token = jwt.sign(
          { name: user.name, id: user._id },
          process.env.JWT_SECRET,
          { expiresIn: "4h" }
        );
        return res
          .status(200)
          .cookie("token", token)
          .json({ message: "Usuário logado com sucesso", data: user });
      }
    }
  } catch (e) {
    return res.status(500).json({ message: "erro", data: { error: e.message } });
  }
};

module.exports = { createUser, logUser };
