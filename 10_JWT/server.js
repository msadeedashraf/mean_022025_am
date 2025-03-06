//console.log('Hello')

const path = require("path");
const cors = require('cors');
const {myLogger, logwriter } = require('./middleware/logwriter');
const errorLogger = require('./middleware/errorLogger');
const corsOptions = require('./config/corsOptions');

const express = require("express");
const exp = require("constants");
const app = express();
const PORT = process.env.PORT|| 3800;

//app.use(express.static(path.join(__dirname, 'public')))
app.use('/',express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//custom middleware logger
app.use(myLogger);

//CORS
app.use(cors(corsOptions));

//Routes
app.use('/', require('./routes/root'));

//API Routes
app.use('/joblisting', require('./routes/api/joblisting'));
app.use('/registerUser', require('./routes/registerUser'));
app.use('/authenticateUser', require('./routes/authenticateUser'));



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