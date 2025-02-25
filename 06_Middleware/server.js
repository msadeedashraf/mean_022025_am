//console.log('Hello')

const path = require("path");

const express = require("express");
const app = express();
//const PORT = 3700;

//app.get('/',(req, res)=>{res.send('Hello World')});

//app.listen(PORT, ()=>{console.log('Checking the server '+ PORT)})
app.listen(3900);

/*
//Chaining Example 1
app.get(
  "/testing(.html)?",
  (req, res, next) => {
    console.log("going to testing.html");
    next();
  },
  (req, res, next) => {
    console.log("Hello");
    next();
  },
  (req, res, next) => {
    res.send("Hi Testing");
  }
);

*/
//Chaining Example 2
/*
const first = (req, res, next)=> { console.log("going to testing.html");
    next();};

    const second = (req, res, next)=> { console.log("Hello Testing");
    next();};

    const third = (req, res, next)=> {res.send("Testing Finished");};


app.get('/testing(.html)?', [first, second, third]);
*/

//app.get('/', (req, res)=>{});

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
/*
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
      //res.sendFile(path.join(__dirname, "views", "error.html"));
      res.status(404).sendFile(path.join(__dirname, "views", "error_404.html"));
    });

*/

//Routes Section Ends



//Refactor Routes Section using chaining

//

const sendHTMLFile = (filePath) => (req, res) => {
  res.sendFile(path.join(__dirname, "views",filePath));
};

const routes = ['','terms','contact', 'privacy', 'index', 'job_listing'];

routes.forEach( route => {
  //res.sendFile(path.join(__dirname, "views",`${route||'index'}.html`));
  
  app.get(`/${route}(.html)?`, sendHTMLFile(`${route||'index'}.html`));
}
)
app.get("/job_search(.html)?", sendHTMLFile('jobs/job_search.html'));
