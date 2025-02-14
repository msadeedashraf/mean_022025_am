
//Writing File using FS module and using Path

const fs = require('fs');
const path = require('path')



fs.writeFile(path.join(__dirname, 'myFiles','mylearning2.txt'),'We are learning node' ,(err, data) => {
    if (err) throw err;
    console.log('data writing complete')
  });

//Append file

var myPath = path.join(__dirname, 'myFiles','mylearning.txt');
var myText = '\nMy Name is Sadeed!';


//fs.readFile()

fs.appendFile(myPath, myText, function (err) {
  if (err) throw err;
  console.log('Saved!');
});

//Rename File

fs.rename('myFiles/greetings.txt', 'arashgreeting.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});









