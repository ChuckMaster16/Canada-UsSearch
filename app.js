const express = require("express");
const bodyp= require("body-parser")
const ejs = require("ejs");
const path = require("path")

//setting the ejs envornment
const app = express();


 //home page
app.get("/", function(req, res){
  res.render("index");
});

//get in touch with the server
app.set('view engine', 'ejs');
app.use(bodyp.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.POR || 3002, ()=>{
  console.log("page is running on port 3002")
});
