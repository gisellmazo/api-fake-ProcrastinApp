const jsonServer = require('json-server');

const db = require("db.js");

//libreria de node para archivs deservidor
const fs = require('fs');

//crea servidor
const server = jsonServer.create();


fs.writeFileSync('/tmp/db.json', JSON.stringify(deb()));

const router = jsonServer.router('/tmp/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port, function(){
    console.log('JSON Server is running on http://localhost:' + port);
});