const html =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Add visitor</title>
    <style>
    body {
      text-align: center;
      background: turquoise;
    }
    form {
      display: inline-block;
      background: whitesmoke;
      border-radius: 2px;
      padding: 20px 50px;
      width: 60%;
    }

    input[type="text"] {
      font-size: .9em;
      border-radius: 2px;
      outline: none;
      border: 1px solid turquoise;
      padding: 0.9em;
      -webkit-appearance: none;
      width: 100%;
      margin: 0.8em 0;
      letter-spacing: 4px;
    }

    input[type="number"] {
      font-size: .9em;
      border-radius: 2px;
      outline: none;
      border: 1px solid turquoise;
      padding: 0.9em;
      -webkit-appearance: none;
      width: 100%;
      margin: 0.8em 0;
      letter-spacing: 4px;
    }

    input[type="date"] {
      font-size: .9em;
      border-radius: 2px;
      outline: none;
      border: 1px solid turquoise;
      padding: 0.9em;
      -webkit-appearance: none;
      width: 100%;
      margin: 0.8em 0;
      letter-spacing: 4px;
    }

    input[type="time"] {
      font-size: .9em;
      border-radius: 2px;
      outline: none;
      border: 1px solid turquoise;
      padding: 0.9em;
      -webkit-appearance: none;
      width: 100%;
      margin: 0.8em 0;
      letter-spacing: 4px;      
    }

    textarea{
      font-size: .9em;
      border-radius: 2px;
      outline: none;
      border: 1px solid turquoise;
      padding: 0.9em;
      width: 100%;
      letter-spacing: 4px;
    }

    input[type="submit"] {
      font-size: .9em;
      border-radius: 2px;
      color: #fff;
      background: turquoise;
      outline: none;
      border: 1px solid turquoise;
      cursor: pointer;
      padding: 0.9em;
      -webkit-appearance: none;
      width: 100%;
      margin: 0.8em 0;
      letter-spacing: 4px;
    }

    input[type="submit"]:hover {
      -webkit-transition: .5s all;
      -moz-transition: .5s all;
      -o-transition: .5s all;
      -ms-transition: .5s all;
      transition: .5s all;
      background: rgb(27, 109, 101);  
    }
  </style>  
</head>
<body>
    <form method="POST" action="/submit-form" id='form'>
      <h1>Visitor's Register</h1>
      <input type="text" id="fName" name="fName" placeholder="Visitor's Name" value="" style="font-family:sans-serif;font-size:0.8em;"><br>
      <input type="text" id="nameOfAssistant" name="nameOfAssistant" placeholder="Visitor's Assistant" value="" style="font-family:sans-serif;font-size:0.8em;"><br>
      <input type="number" min="1" id="age" name="age" placeholder="Age of Visitor" value="" style="font-family:sans-serif;font-size:0.8em;"><br>
      <input type="date" id="dateOfVisit" name="dateOfVisit" value="" style="font-family:sans-serif;font-size:0.8em;"><br>
      <input type="time" id="timeOfVisit" name="timeOfVisit"  value="" style="font-family:sans-serif;font-size:0.8em;"><br>
      <textarea name="comments" id="comments" placeholder="Comments" style="font-family:sans-serif;font-size:0.8em;"></textarea><br>
      <input type="submit" value="Add visitor" >
    </form>     
</body>
</html>`
module.exports = html;