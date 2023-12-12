const http = require('http');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('hello world!!');
});

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`); //${} "interpolacion de cadena" nos permite insertar un valor dinámico en la cadena
});