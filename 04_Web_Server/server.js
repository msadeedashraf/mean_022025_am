//console.log('hello testing')

//HTTP Module
//https://www.w3schools.com/nodejs/nodejs_http.asp

const http = require('http');
const fs = require('fs');
const path = require('path');
const fspromises = require('fs').promises;


const logwriter = require('./logwriter');
//const fileName = ``
const EventEmitter = require('events');
class Emitter extends EventEmitter{};
//Initialize the object
const myEmitter = new Emitter();
myEmitter.on('log', (logType,message, fileName)=> {logwriter(logType, message, fileName)})

//setTimeout(()=>{myEmitter.emit('log', 'INFO-101','This is testing our log writer','reqLog.txt' )},2000);

const PORT = process.env.PORT || 3600;

const server = http.createServer(
(req, res)=>{ 

    console.log(req.url, req.method);
    myEmitter.emit('log','INFO', `${req.url}\t${req.method}`, 'reqLog.txt')

    /*
    let mypath;

    if (req.url === '/' || req.url === '/index.html')
        {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            mypath = path.join(__dirname, 'views', 'index.html');
            fs.readFile(
                mypath, 'utf8', (err, data)=>{res.end(data);
            });     
        }
*/
/*
    let mypath;
        switch(req.url)
        {
            case '/':
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                mypath = path.join(__dirname, 'views', 'index.html');
                fs.readFile(
                    mypath, 'utf8', (err, data)=>{res.end(data);
                });   
                break; 

            case '/index.html':
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                mypath = path.join(__dirname, 'views', 'index.html');
                fs.readFile(
                    mypath, 'utf8', (err, data)=>{res.end(data);
                });   
                break; 
            } 
                
            */

            const extension = path.extname(req.url);
            let contentType;

    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }
    let filePath =   
    contentType === 'text/html' && req.url === '/' 
    ? path.join(__dirname, 'views', 'index.html') 
    : contentType === 'text/html' && req.url.slice(-1) === '/'
        ? path.join(__dirname, 'views', req.url, 'index.html') 
        : contentType === 'text/html' 
            ? path.join(__dirname, 'views', req.url) 
            : path.join(__dirname, req.url);


            if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

            const fileExists = fs.existsSync(filePath); 

console.log(fileExists);

if (fileExists) {
    //server the file 
    serveFile(filePath, contentType, res);
    
} else {
    //404
    //301 redirect

    switch (path.parse(filePath).base) {
        case 'old-page.html':
            res.writeHead(301, { 'Location': '/new-page.html' });
            res.end();
            break;
        case 'www-page.html':
            res.writeHead(301, { 'Location': '/' });
            res.end();
            break;
        default:
                 //404
    }


console.log(path.parse(filePath));
    
}

            
        
}
);

server.listen(PORT, ()=>{console.log('Checking the server '+ PORT)})
//server.listen(PORT)


const serveFile = async (filePath, contentType, response) => {
    try {
        const data= await fspromises.readFile(filePath, 'utf8');
        response.writeHead(200, {'Content-Type': contentType});
        response.end(data);

    } catch (err) {
        console.log(err);
        response.statusCode = 500;//can not read the data
        response.end();
    }
}