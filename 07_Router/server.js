//console.log('Hello')

const path = require("path");
const cors = require('cors');
const {myLogger, logwriter } = require('./middleware/logwriter');
//const router = express.Router();
const errorLogger = require('./middleware/errorLogger');

const express = require("express");
const exp = require("constants");
const app = express();
const PORT = process.env.PORT|| 3800;

//app.use(express.static(path.join(__dirname, 'public')))
app.use('/',express.static(path.join(__dirname, 'public')))
app.use('/job-search',express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}));
app.use(express.json());


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

//Routes
app.use('/', require('./routes/root'));
//To Handle SubFolders Routes
//app.use('/job-search', require('./routes/job-search'));

//API Routes
app.use('/joblisting', require('./routes/api/joblisting'));



app.all(`*`, (req, res) => {

  res.status(404);

  if (req.accepts('html'))
  {
    res.sendFile(path.join(__dirname, "views", "error.html"));

  }
  else if (req.accepts('json'))
  {
  res.json({"error":"Data Not found"});
  }
  else
  {
    res.type('txt').send("Not found");

  }

  
});

app.use(errorLogger);


app.listen(PORT, ()=>{console.log('Checking the server '+ PORT)})