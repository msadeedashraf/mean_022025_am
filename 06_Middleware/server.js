//console.log('Hello')

const path = require("path");
const cors = require('cors');
const {myLogger } = require('./middleware/logwriter');

const express = require("express");
const exp = require("constants");
const app = express();
const PORT = process.env.PORT|| 3800;



app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//custom middleware
///app.use((req, res, next)=>{});
/*
app.use((req, res, next)=>{
  const logtext = `${req.method} \t ${req.headers.origin} \t ${req.url}\t${req.path}`;
  logwriter('INFO' , logtext, 'myLogs.txt' );
  console.log(`${req.method} ${req.path}`);
  next();
});
*/

//custom middleware logger
app.use(myLogger);

//Cross Origin Resource Sharing
const myWhiteList = ['https://www.teczila.com','https://www.google.com','http://127.0.0.1:5500','http://localhost:3800']

const corsOptions = {
  origin: (origin, callback) => {
      if (myWhiteList.indexOf(origin) !== -1 || !origin) {
          callback(null, true)
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

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

app.listen(PORT, ()=>{console.log('Checking the server '+ PORT)})