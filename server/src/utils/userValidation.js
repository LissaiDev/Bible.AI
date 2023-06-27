const { body } = require("express-validator");
const User = require("../models/User");
module.exports = {
  signIn: [
    body("name")
      .notEmpty()
      .withMessage("Name is required")
      .custom(async (value) => {
        const user = await User.findOne({ name: value });
        if (user) {
          return Promise.reject("Name is already taken");
        }
        return true;
      }),
    body("password")
      .not()
      .isEmpty()
      .withMessage("Password is required")
      .custom(async (value, { req, res }) => {
        if (value === req.body.name) {
          throw new Error("A senha não pode ser igual ao nome de usuário");
        }
        return true;
      })
      .isLength({ min: 8 })
      .withMessage("A senha deve ter no mínimo 8 caracteres"),
    body("previlegies").custom(async (value) => {
      if (value !== "super-admin" && value !== "admin" && value !== "user") {
        return Promise.reject("Previlégio inexistente");
      }
      return true;
    }),
  ],
  logIn: [
    body("name")
      .notEmpty()
      .withMessage("Name is required")
      .custom(async (value) => {
        const user = await User.findOne({ name: value });
        if (!user) {
          return Promise.reject("Usuário não existe");
        }
        return true;
      })
  ],
};
