const fspromises = require('fs').promises;
const path = require('path');

//const myPath = path.join(__dirname, 'myFiles','mylearning.txt');

const fileOperation = async () => {

try 
    {
        let myData = await fspromises.readFile(path.join(__dirname, 'myFiles','arashgreeting.txt'), 'utf-8');
        console.log(myData);

        await fspromises.unlink(path.join(__dirname, 'myFiles','arashgreeting.txt'), myData);
        
        await fspromises.writeFile(path.join(__dirname, 'myFiles','sadeedfile.txt'), myData);
        await fspromises.appendFile(path.join(__dirname, 'myFiles','sadeedfile.txt'), '\nHello from Sadeed');
        await fspromises.rename(path.join(__dirname, 'myFiles','sadeedfile.txt'), path.join(__dirname, 'myFiles','sadeednewfile.txt'));
       
        myData = await fspromises.readFile(path.join(__dirname, 'myFiles','sadeednewfile.txt'), 'utf-8');
        console.log(myData);
    }
catch (err) 
    {
        console.log(err);
    }

};

fileOperation();

/*
//Callback Hell
const fs = require('fs');
const path = require('path')




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
  */
 