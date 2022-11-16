const express = require('express');
const Faq = require('../models/Faq');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Hallo Server");
})

router.post("/addfaq", async(req, res)=>{
    const faq = await Faq.create({question: req.body.question, answer: req.body.answer})
    faq.save().then(()=>console.log("Faq Saved"))
    console.log(faq)
});

router.post("/fetchdata", async(req, res)=>{
    const fetchfaq = await Faq.find({});
    res.status(200).json(fetchfaq);
})

module.exports = router;