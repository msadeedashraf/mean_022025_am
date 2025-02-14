const fs = require('fs');
const path = require('path')


fs.readFile()


fs.writeFile(path.join(__dirname, 'myFiles','sadeed.txt'),'We are learning node' ,(err, data) => {
    if (err) throw err;
    console.log('data writing complete');

            fs.appendFile(path.join(__dirname, 'myFiles','sadeed.txt'), '\nMy Name is Sadeed!', function (err) {
            if (err) throw err;
            console.log('Saved!');

                    fs.rename(path.join(__dirname, 'myFiles','sadeed.txt'), 'sam.txt', function (err) {
                        if (err) throw err;
                        console.log('File Renamed!');
                    });
            });
  });