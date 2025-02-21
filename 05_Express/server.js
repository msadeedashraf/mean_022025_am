//console.log('Hello')

const express = require('express');
const app = express();
//const PORT = 3700;

app.get('/',(req, res)=>{res.send('Hello World')});

//app.listen(PORT, ()=>{console.log('Checking the server '+ PORT)})
app.listen(3800);


