const { Schema, model } = require("mongoose");
const CommentSchema = new Schema({
  author: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  message: {
    type: String,
    required: true,
  }
},{
    timestamps: true
});

module.exports = model("Comment", CommentSchema);