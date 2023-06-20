const fetchAI = require("../../services/fetchAI");
module.exports = (req, res) => {
  const { message } = req.body;
  console.log(message);
  if (message) {
    const messages = message.map((message) => {
      if (message.user.name === "assistant") {
        return {
          role: "assistant",
          content: message.text,
        };
      }
      return {
        role: "user",
        content: message.text,
      };
    });
    const reversed = messages.reverse();
    fetchAI(reversed, res);
  } else {
    res.status(400).json({ message: "No message received" });
  }
};
