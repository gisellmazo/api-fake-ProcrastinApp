const jsonServer = require('json-server');

var db = require("./server-fake/db");

//libreria de node para archivs deservidor
var fs = require('fs');

//crea servidor
const server = jsonServer.create();


fs.writeFileSync('/tmp/db.json', JSON.stringify(deb()));

var router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port, function(){
    console.log('JSON Server is running on http://localhost:' + port);
});