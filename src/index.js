"use strict"

const { addNewVisitor } = require('./app');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.set('view engine','pug')
app.use(urlencodedParser)

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/form.html"))
})

app.post('/submit-form',(req, res) => {
    const fName = req.body.fName
    const nameOfAssistant = req.body.nameOfAssistant
    const age = req.body.age
    const dateOfVisit = req.body.dateOfVisit
    const timeOfVisit = req.body.timeOfVisit
    const comments = req.body.comments
    addNewVisitor(fName,age,dateOfVisit,timeOfVisit,nameOfAssistant,comments)
    res.render("index");
    res.end()
})


app.listen(9005)
