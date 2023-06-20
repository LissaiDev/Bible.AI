const Study = require("../../models/Study");
module.exports = async(req,res)=>{
    console.log(req.body);
    try{
        const study = new Study({
            title: req.body.title,
            nameMeaning: req.body.nameMeaning,
            description: req.body.description,
            category: req.body.category,
            content: req.body.content,
            conclusion: req.body.conclusion
        })
        await study.save();
        console.log(study);
        res.status(200).json(study);
    }catch(e){
        console.log(e.message);
        res.status(500).json(e.message);
    }
}