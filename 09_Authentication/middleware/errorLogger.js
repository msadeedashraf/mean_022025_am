const {logwriter} = require('./logwriter')

const errorLogger = (err, req, res, next)=>{
 
    //console.error(err.stack);
    //logwriter('ERROR', `${err.name}\t${err.stack}\t${err.message}`, 'errorsLog.txt')
    logwriter('ERROR', `${err.name}\t${err.message}`, 'errorsLog.txt')
    res.status(500).send(err.message);
    
  }

  module.exports = errorLogger;