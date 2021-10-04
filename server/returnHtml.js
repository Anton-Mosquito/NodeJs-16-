import http from 'http';
import fs   from 'fs/promises';
import __dirname from '../__dirname.js';
console.log(__dirname);

let obj = {
  '/' : 'index.html',
	'/page1': 'file1.html',
	'/page2': 'file2.html',
	'/page3': 'file3.html',
}

http.createServer(async (request, response) => {
	if (request.url != '/favicon.ico') {
    console.log(request.url);
    console.log(obj[request.url]);
		let text = await fs.readFile(`${obj[request.url]}`, 'utf8');
		
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(text);
		response.end();
	}
}).listen(8888);