//console.log('Hello')

const path = require("path");

const express = require("express");
const app = express();
//const PORT = 3700;

//app.get('/',(req, res)=>{res.send('Hello World')});

//app.listen(PORT, ()=>{console.log('Checking the server '+ PORT)})
app.listen(3800);
/*
app.get('/', (req, res)=>{

//res.sendFile('./views/index.html', {root:__dirname});
res.sendFile(path.join(__dirname, 'views', 'index.html'));

});
    
app.get('/index.html', (req, res)=>{

    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    
    });
*/

//Regular Expressions:  https://www.w3schools.com/jsref/jsref_obj_regexp.asp

//Routes Section Start
app.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/privacy(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "privacy.html"));
});

app.get("/contact(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.get("/terms(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "terms.html"));
});

app.get("/job_listing(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "job_listing.html"));
});

app.get("/job_search(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "jobs/job_search.html"));
});


app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "error.html"));
  });
  

//Routes Section Ends



//Refactor Routes Section using chaining

//app.get()

//app.get('/', (req, res)=>{});
