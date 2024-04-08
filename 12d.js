const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    const msg='';
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if(!err){
            msg=data;
        }
    
    });
    
      res.write('<html>');
      res.write('<head><title>Enter Message</title></head>');
      res.write('<body>');
      

      res.write('<ul>');
     
     res.write(`<li>${msg}</li>`);
    
      res.write('</ul>');

      res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
      res.write('</body>');
      res.write('</html>');
      return res.end();
    }
  
  if (url === '/message' && method === 'POST') {
    const msg = [];
    req.on('data', (chunk) => {
      msg.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(msg).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', `${message}\n`, (err) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          return res.end('Error writing file');
        }
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
});

server.listen(3056, () => {
  console.log('Server is running on port 3055');
});
