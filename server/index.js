import http from 'http';

// http.createServer((request, response) => {
//   const date = new Date().toTimeString().slice(0, 8)
//   response.setHeader('Content-Language', 'text/html');
//   response.setHeader('Cache-Control', 'no-cache');
// 	response.statusCode = 200;
// 	response.write(`<b>${date}</b>`);
// 	response.end();
// }).listen(8888);

// http.createServer((request, response) => {
//  response.writeHead(404, {'Content-Type': 'text/html'});
// 	response.write('page not found');
// 	response.end();
// }).listen(8888);

// http.createServer((request, response) => {
//   const date = new Date().toTimeString().slice(0, 8)
//   response.writeHead(200, [['Content-Type', 'text/html'], ['Content-Language', 'ru']])
// 	response.write(`<b>${date}</b>`);
// 	response.end();
// }).listen(8888);

// let i = 100;

// http.createServer((request, response) => {
// 	response.setHeader('Content-Type', 'text/html');
// 	response.statusCode = 200;
//   if (i === 0) {
//     response.write(`<b>${i}</b>`);
//     response.end();
//   }
// 	response.write(String(--i));
// 	response.end();
// }).listen(8888);


http.createServer((request, response) => {
	// console.log(request.url);
	// console.log(request.method);
	// console.log(request.headers);
	
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('text');
	response.end();
}).listen(8888);