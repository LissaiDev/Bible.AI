const {Schema, model } = require("mongoose");
const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    previlegies:{
        enum: ["super-admin","admin", "user"],
        default: "user",
        type:String,
        required: true
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
})

module.exports = model("User", userSchema);