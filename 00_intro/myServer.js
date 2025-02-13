var http = require('http');
var myDate = require('/myDateModule')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + myDate.myDateTime());
  res.end('<h1>My Name is Sadeed</h1>');
}).listen(8081);