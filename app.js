const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
var mongoose = require('mongoose');
// const bodyparser=require("body-parser");
mongoose.connect('mongodb://localhost/index', { useNewUrlParser: true })
// mongoose.connect('mongodb://localhost/index/contactUs',{useNewUrlParser:true}) //for contact us
const port = 80
//Define mongo schema
var formSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: String,
    gender: String,
    institude: String,
    mytext: String
});
var constactSchema = new mongoose.Schema({
    textarea: String
});
var Form = mongoose.model('Form', formSchema);
var Contact = mongoose.model('Contact', constactSchema);

//For saving static file
app.use('/static', express.static('static'))
app.use(express.urlencoded())
//Set the template as pug
app.set('view engine', 'pug')
//Set the view directory
app.set('views', path.join(__dirname, 'views'))

//Our pug demo endpoint
// app.get('/demo',(req,res)=>{
//     res.status(200).render('demo',{title:'hello Ankush',message:'Good evening'});
// });
// app.get("/",(req,res)=>{
//     res.status(200).render('demo',{title:'hello Ankush',message:'Good evening'});
// });

// app.get("/",(req,llores)=>{
//     res.send("this is my first app's home page");
// });

app.get('/index', (req, res) => {
    res.status(200).render('index', { title: 'LearnProgrammingWithAnkush' });
});
app.get("/", (req, res) => {
    res.status(200).render('index', { title: 'LearnProgrammingWithAnkush' });
});
app.get("/about", (req, res) => {
    res.status(200).render('about');
});
app.get("/contactUs", (req, res) => {
    // res.send("this is my first app's get req about page");
    res.status(200).render('contactUs');
});
app.get("/service", (req, res) => {
    // res.send("this is my first app's get req about page");
    res.status(200).render('service');
});

// //For post request
// app.post("/",(req,res)=>{
//     name=req.body.name 
//     age=req.body.age
//     email=req.body.email
//     gender=req.body.gender
//     institude=req.body.institude
//     mytext=req.body.mytext
//     let outputToWrite=`The name of learner is ${name}, ${age} years old, email ${email}, gender ${gender}, institude ${institude} and more about learner ${mytext}`
//     // console.log(outputToWrite);
//     fs.writeFileSync(`output.txt`,outputToWrite)
//     const params={'message':'your form have submitted succusesfully'}
//     res.status(200).render('index.pug',params);
// })

app.post("/", (req, res) => {
    var myData = new Form(req.body);
    myData.save().then(() => {
        // res.status(200).render('index.pug',params);
        res.status(200).render('index.pug');
       
    }).catch(() => {
        res.status(404).send("item has been not send");
    })
})
//for post contact 
// app.post("/contactUs",(req,res)=>{
//     textarea=req.body.textarea
//   let outputOfText=`Query/Suggestion of learner is ${textarea}`
//     // console.log(outputOfText);
//     fs.writeFileSync('outputOfQuery.txt',outputOfText)
//     const param={'message':'Thanks for contacting Us. your queries have submitted succusesfully'}
//     res.status(200).render('contactUs.pug',param);
// })

app.post("/contactUs", (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.status(200).send("Your quey/suggestion have been submitted successfully")
    }).catch(() => {
        res.status(404).send("item has been not send");
    })
})
//start the sever
app.listen(port, () => {
    console.log(`This appplication listening at port ${port}`);
});