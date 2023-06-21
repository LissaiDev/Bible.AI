const Comment = require("../../models/Comment");
module.exports = async (req, res) => {
  try {
    const { name, message } = req.body;
    const data = JSON.parse(name);
    console.log(data, message);
    const comment = new Comment({
      author: data,
      message: message,
    });
    await comment.save();
    console.log(comment);
    res.status(200).json({ comment });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};
