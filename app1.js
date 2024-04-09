const http=require("http");
const rout=require('./route');
const server=http.createServer(rout);

server.listen(4075);