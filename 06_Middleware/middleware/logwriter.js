const {format} = require('date-fns');
const {v4:uuidv4} = require('uuid');


const fs = require('fs');
const path = require('path');
const fspromises = require('fs').promises;


const logwriter = async (logType, msg , logName) => {

    const dateTime = `${format(new Date(), "yyyy-MM-dd hhmm")}`;
    const myid = `${uuidv4()}`;
    //console.log(dateTime + '-----' + myid + '-----' + log)
    const logEvent = `${logType+ '\t'+dateTime + ': \t' + myid + '\t' +msg +'\n'}`;
    //console.log(logEvent);
    try
    {

        if (!fs.existsSync(path.join(__dirname, '..','myLogs'))) {
            await fspromises.mkdir(path.join(__dirname, '..','myLogs'));
        }

    await fspromises.appendFile(path.join(__dirname, '..','myLogs',logName), logEvent);

    }
    catch(err)
    {
        console.log(err);
    }
    
}
const myLogger = (req, res, next)=>{
    const logtext = `${req.method} \t ${req.headers.origin} \t ${req.url}\t${req.path}`;
    logwriter('INFO' , logtext, 'myLogs.txt' );
    console.log(`${req.method} ${req.path}`);
    next();
  }

module.exports = {myLogger, logwriter};


