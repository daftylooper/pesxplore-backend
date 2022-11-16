const app = require('express')();
const { default: mongoose } = require('mongoose');
const indexRouter = require('./routes/index')
const faqRouter = require('./routes/faqRoutes')
require('dotenv').config();
const Faq = require('./models/Faq');
const bodyParser = require("body-parser")

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());

// app.post("/addfaq", async function(req, res){
//     const faq = await Faq.create({question: req.body.question, answer: req.body.answer})
//     faq.save().then(()=>console.log("Faq Saved"))
//     console.log(faq)
// })

app.use("/api", indexRouter);

//app.use('/', faqRouter);

app.listen(4000); //process.env.PORT ||  