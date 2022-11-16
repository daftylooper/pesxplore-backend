const mongoose = require('mongoose');

const FAQschema = new mongoose.Schema({
    question: String,
    answer: String,
    createdAt: {
        type: Date,
        default: ()=>Date.now(),
    }
})

module.exports = mongoose.model("Faq", FAQschema);