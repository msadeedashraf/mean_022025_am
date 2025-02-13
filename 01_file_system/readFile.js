/*
//https://nodejs.org/docs/latest/api/fs.html#fsreadfd-options-callback

//Reading file using Node
import { readFile } from 'node:fs';

readFile('./lorem.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
*/

/*
//Reading File using FS module
const fs = require('fs');

fs.readFile('./message.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
*/
  
/*

//Reading File using FS module with UTF-8 (https://www.w3schools.com/charsets/ref_html_utf8.asp)
const fs = require('fs');

fs.readFile('./message.txt','utf8' ,(err, data) => {
    if (err) throw err;
    console.log(data);
  });
*/


//Reading File using FS module with UTF-8 and using Path

const fs = require('fs');
const path = require('path')

fs.readFile(path.join(__dirname, 'myFiles','greetings.txt'),'utf8' ,(err, data) => {
    if (err) throw err;
    console.log(data);
  });





