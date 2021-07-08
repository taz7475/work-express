/** @format */

console.log("intro to espress js modification ");
//import express
const express = require("express");
// associate the express to variable
const app = express();
//create the variale port
const port = 5000;




const date = new Date (Date.now())
//definig middleware for working hours 
function welcome(req,res,next) {
  const day = date.getDay()
  const hours = date.getHours()


  console.log(day,hours)
  if ((day >=2 && day<=5) && (hours >=6 && hours >=9) ===false) {
    console.log("Out of servcies :( ")
    //res.send ('not available')
    res.sendFile(__dirname + '/public/error.html')
  }
  else {
    next () 
  }


}
app.use(welcome)
app.use(express.static('public'))
app.listen(port, (err)=>{
    err ? console.log(err) : console.log('running on 5000')
})

// app.listen(port, err => {
//   err ? console.log(err) : console.log("the server is running onl port 5000");
// });
// app.get('/login' , (req,res) => {
//     res.send('hello world')
// })


//Get users
//@get /users
// app.get("/users", (req, res) => {
//   res.json(users);
// });
// app.get('users/:id' , (req,res) => {
//   res.json(users.filter(user=>user.id ===parseInt(req.params.id)))
// })
// app.use(express.static("public"));
//listen to the port