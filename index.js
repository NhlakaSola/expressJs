"use strict"

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  password: "pass",
  port:5432,
  database: "db"
});

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug')
app.set("views", path.join(__dirname, "views"));

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

const addNewVisitor  = (vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments) =>{
    pool.query( 'INSERT INTO VISITORS( visitor_name, visitors_age, date_of_visit, time_of_visit, assistant_name, comments) VALUES($1,$2,$3,$4,$5,$6) RETURNING *' , 
    [vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments],
    function (err,results) {
			if (err) {
				return(err);
			} 
			console.log(results.rows);
		});
	
}

app.listen(9005)