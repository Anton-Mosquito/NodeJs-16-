import http from 'http';

let obj = {
	'/page1': '1',
	'/page2': '2',
	'/page3': '3',
}

// http.createServer((request, response) => {
// 	if (request.url != '/favicon.ico') {
// 		let text;
// 		let status = 200;

//     switch (request.url) {
//       case '/page1':
//         text = '1';
//         break;
//       case '/page2':
//         text = '2';
//         break;
//       case '/page3':
//         text = '3';
//         break;
//       default:
//         text = 'page not found';
//         status = 404;
//         break;
//     }
		
// 		response.writeHead(status, {'Content-Type': 'text/html'});
// 		response.end();
// 	}
// }).listen(8888);

// http.createServer((request, response) => {
// 	if (request.url != '/favicon.ico') {
// 		let text;
// 		let status = 200;

//     switch (request.url) {
//       case Object.keys(obj).find((el) => el === request.url):
//         text = obj[request.url];
//         break;
//       default:
//         text = 'page not found';
//         status = 404;
//         break;
//     }
		
// 		response.writeHead(status, {'Content-Type': 'text/html'});
// 		response.end();
// 	}
// }).listen(8888);