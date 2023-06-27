require("dotenv").config();
const express = require("express");
const databaseConnection = require("./config/database");
const app = express();
const cors = require("cors");
const chat = require("./routes/chat");
const comments = require("./routes/comments")
const axios = require("axios");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
const studies = require("./routes/studies");
const user = require("./routes/user");
//Connecting do database
app.use("/studies", studies);
app.use("/chat", chat);
app.use("/comments", comments);
app.use("/user", user);
databaseConnection();
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});