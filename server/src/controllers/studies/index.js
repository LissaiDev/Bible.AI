const Study = require("../../models/Study");

const getStudies = async (req, res) => {
  try {
    const studies = await Study.find();
    console.log(studies);
    res.status(200).json(studies.reverse())
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
};

const getStudy = async (req, res) => {
  try {
    const study = await Study.findById(req.params.id);
    console.log(study);
    res.status(200).json(study);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
};


const createStudy = async(req,res)=>{
  console.log(req.body);
  try{
      const study = new Study({
          title: req.body.title,
          nameMeaning: req.body.nameMeaning,
          description: req.body.description,
          category: req.body.category,
          content: req.body.content,
          conclusion: req.body.conclusion,
          recommendation: req.body.recommendation,
      })
      await study.save();
      console.log(study);
      res.status(200).json(study);
  }catch(e){
      console.log(e.message);
      res.status(500).json(e.message);
  }
}

module.exports = { getStudies, getStudy, createStudy };
