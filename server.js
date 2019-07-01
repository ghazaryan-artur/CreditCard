const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/dist/Artsofte'));

app.get('*', (req,res) => res.senFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port,() => console.log('Runing...'));