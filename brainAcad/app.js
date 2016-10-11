'use strict';

const http = require('http');//в переменной хранится http объект
const fs = require('fs');
const path = require('path');

//сделали сервер на порту 3000
let server = http.createServer();

server.on('listening', () => {
	console.log('server is listening on the port 3000');
});

server.on('request', (req, res) => {
	if(req.method === 'POST' && req.url === '/concat') {
		let result = [];
		req
			.on('data', data => result.push(data))
			.on('end', () => {
				result = Buffer.concat(result).toString();
				fs.appendFile('messages.txt', '\n\n'+result, (err) => {
					if (!err) {
						res.writeHead(200, {
							'Set-Cookie': 'form=true'
						});
						console.log('asd');
						res.end(JSON.stringify({result: 'OK'}));
					}
				});
			})
	}
	return;
})

server.on('request', (req, res) => {
	let filePath = (req.url === '/')? '/public/index.html' : '/public' + req.url;
	let contentType = 'text/html';
	let extName = path.extname(req.url);
	switch (extName) {
		case '.js':
			contentType = 'application/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.png':
			contentType = 'image/png';
			break;
		case '.jpg' || '.jpeg':
			contentType = 'image/jpeg';
			break;
		case '.gif':
			contentType = 'image/gif';
			break;
	}

    fs.readFile(__dirname + filePath, (err, data) => {
		res.writeHead(200, {"Content-Type": contentType});
    	res.end(data);
    });

	//res.end(`вы сделали ${req.method} запрос на: ${req.url}`);
	//res.end('<h1>Hello</h1>');
});

server.listen(3000);