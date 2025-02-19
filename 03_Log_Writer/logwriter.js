const {format} = require('date-fns');
const {v4:uuidv4} = require('uuid');


const fs = require('fs');
const path = require('path');
const fspromises = require('fs').promises;


const logwriter = async (log) => {

    const dateTime = `${format(new Date(), "yyyy-MM-dd")}`;
    const myid = `${uuidv4()}`;
    //console.log(dateTime + '-----' + myid + '-----' + log)
    const logEvent = `${'\n'+dateTime + '\t' + myid + '\t' +log }`;
    //console.log(logEvent);
    try
    {

        if (!fs.existsSync(path.join(__dirname, 'myLogs'))) {
            await fspromises.mkdir(path.join(__dirname, 'myLogs'));
        }

    await fspromises.appendFile(path.join(__dirname, 'myLogs','eventlogs.txt'), logEvent);

    }
    catch(err)
    {
        console.log(err);
    }
    


}



module.exports = logwriter;


