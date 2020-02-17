const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded())

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/form.html"))

})

app.post('/submit-form', (req, res) => {
    const fName = req.body.fName
    const nameOfAssistant = req.body.nameOfAssistant
    const age = req.body.age
    const dateOfVisit = req.body.dateOfVisit
    const timeOfVisit = req.body.timeOfVisit
    const comments = req.body.comments

    res.end()
  })

app.listen(9005)