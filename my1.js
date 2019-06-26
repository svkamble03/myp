var http = require('http');

var controller=function(req, res){
  response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( Hello World!!!!!!!! );
};
 
var server=http.createServer(controller);
server.listen(7000);
console.log("listening on port 7000");