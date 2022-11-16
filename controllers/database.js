const { default: mongoose } = require('mongoose');
const Faq = require('../models/Faq');

export const addFaq = async(req, res)=>{
    const faq = await Faq.create({question: req.body.question, answer: req.body.answer})
    faq.save().then(()=>console.log("Faq Saved"))
    console.log(faq)
}