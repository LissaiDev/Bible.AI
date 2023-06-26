const { Schema, model } = require("mongoose");
const StudySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    nameMeaning: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Personagem", "Milagre", "Tema"],
    },
    content: {
      type: String,
      required: true,
    },
    conclusion: {
      type: String,
      required: true,
    },
    recommendation: {
      type: String,
      required: true,
    },
    //author
    // createdBy:{
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    //   trim:true
    //   //default
    // },
    // status:{
    //   enum: ["pending","available"],
    //   required: true,
    //   default: "pending",
    //   type: String
    // }
    //status
    //cron job to delete articles with more than 2 months
  },
  {
    timestamps: true,
  }
);
module.exports = model("Study", StudySchema);
