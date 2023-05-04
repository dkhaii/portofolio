// const http = require('http');
// const fs = require('fs');

// const host = 'localhost';
// const port = 3000;

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     fs.readFile('./index.html', function (error, html) {
//         if (error) {
//             response.writeHead(404);
//             response.write('not found');
//         }
//         response.write(html);
//         response.end();
//     });
// });

// server.listen(port, host, () => {
//     console.log(`server berjalan pada http://${host}:${port}/`);
// });

const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/svg', express.static(__dirname + 'public/svg'));

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
})
