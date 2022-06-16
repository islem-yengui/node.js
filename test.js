
const http = require('http');
 var fs = require('fs');
const hostname = '127.0.0.1';
 const port = 3000;
 const data = fs.readFileSync('./hello.txt',
        {encoding:'utf8', flag:'r'});
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end(data);
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
console.log("start reading")

console.log(data);

console.log("finish reading")
