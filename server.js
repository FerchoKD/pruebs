const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', null, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write('Archivo no encontrado');
      } else {
        res.write(data);
      }
      res.end();
    });
  }
});

server.listen(8000, () => {
  console.log('Servidor funcionando en el puerto 8000');
});
