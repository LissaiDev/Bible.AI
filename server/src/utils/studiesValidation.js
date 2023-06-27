const {body} = require("express-validator")
module.exports =[
    body("content").notEmpty().withMessage("content is required"),
    body("title").notEmpty().withMessage("title is required"),
    body("nameMeaning").notEmpty().withMessage("nameMeaning is required"),
    body("category").notEmpty().withMessage("category is required"),
    body("recommendation").notEmpty().withMessage("recommendation is required"),
    body("conclusion").notEmpty().withMessage("conclusion is required"),
]