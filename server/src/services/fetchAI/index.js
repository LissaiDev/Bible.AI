const axios = require("axios");
module.exports = (messages, res) => {
  const options = {
    method: "POST",
    url: process.env.URL,
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.HOST,
    },
    data: {
      model: "gpt-3.5-turbo",
      messages: messages,
    },
  };
  const fetch = async()=>{
    try {
      const response = await axios.request(options);
      console.log("Fetching please wait");
      console.log(response.data.choices[0].message);
      res.status(200).json({ response: {...response.data.choices[0].message, id:response.data.id }});
    } catch (error) {
      console.error(error);
    }
  }
  fetch();
};
