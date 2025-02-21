//console.log('Hello')

const path = require('path');


const express = require('express');
const app = express();
//const PORT = 3700;

//app.get('/',(req, res)=>{res.send('Hello World')});

//app.listen(PORT, ()=>{console.log('Checking the server '+ PORT)})
app.listen(3800);

app.get('/', (req, res)=>{

//res.sendFile('./views/index.html', {root:__dirname});
res.sendFile(path.join(__dirname, 'views', 'index.html'));

});

//app.get('/', (req, res)=>{});






