const express = require('express');
const router = express.Router();
const { addFaq } = "../controllers/database"

router.post("/addfaq", async(req, res)=>{
    const faq = await Faq.create({question: req.body.question, answer: req.body.answer})
    faq.save().then(()=>console.log("Faq Saved"))
    console.log(faq)
});

module.exports = router