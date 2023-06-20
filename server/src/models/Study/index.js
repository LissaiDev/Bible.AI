const {Schema, model} = require("mongoose");
const StudySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    nameMeaning: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
        enum: ["Personagem", "Milagre", "Tema"]
    },
    content:{
        type: String,
        required: true
    },
    conclusion:{
        type: String,
        required: true
    }
},{
    timestamps: true
})
module.exports = model("Study", StudySchema);