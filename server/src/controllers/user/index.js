const User = require("../../models/User");
const { validationResult } = require("express-validator");
const isLogged = require("../../utils/isLogged");
const { hash, compare } = require("../../utils/hash");
const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
  const { name, password, previlegies } = req.body;
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
        console.log("entrou");
        const newUser = new User({
          name: name,
          password: hash(password),
          previlegies: previlegies,
          createdBy: user.id,
        });
        await newUser.save();
        console.log(newUser);
        return res
          .status(200)
          .json({ message: "Usuário criado com sucesso", data: newUser });
      }else{
        return res.status(401).json({
          message: "Sem autorização",
          data: { error: "Sem autorização" },
        });
      }
    } else {
      return res.status(401).json({
        message: "Sem autorização",
        data: { error: "Sem autorização" },
      });
    }
  } catch (e) {
    return res
      .status(500)
      .json({ message: "erro", data: { error: e.message } });
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
          { name: user.name, id: user._id, previlegies: user.previlegies },
          process.env.JWT_SECRET
        );
        console.log(token);
        return res
          .status(200)
          .cookie("token", token)
          .json({ message: "Usuário logado com sucesso", data: user });
      } else {
        return res.status(401).json({
          message: "Usuário ou senha incorretos",
          data: { error: "Sem autorização" },
        });
      }
    }else{
      return res.status(401).json({
        message: "Sem autorização",
        data: { error: "Sem autorização" },
      });
    }
  } catch (e) {
    return res
      .status(500)
      .json({ message: "erro", data: { error: e.message } });
  }
};

const logOut = (req, res)=>{
  try{
    if(isLogged(req)){
    return res.clearCookie("token").status(200).json({message:"Usuário deslogado"})
    }else{
      return res.status(401).json({message:"Usuário não logado"})
    }
  }catch(e){
    console.log(e.message);
    res.status(500).json({message: "erro", data: { error: e.message }});
  }
}

module.exports = { createUser, logUser, logOut };
