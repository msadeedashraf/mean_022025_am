
//Writing File using FS module and using Path

const fs = require('fs');
const path = require('path')



fs.writeFile(path.join(__dirname, 'myFiles','mylearning.txt'),'We are learning node' ,(err, data) => {
    if (err) throw err;
    console.log('data writing complete')
  });


