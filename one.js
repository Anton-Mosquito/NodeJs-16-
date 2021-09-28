import fs from 'fs';

let names = ['file1.txt', 'file2.txt', 'file3.txt'];
let files = [];

for (let name of names) {
	files.push(fs.promises.readFile(name, 'utf8'));
}


Promise.all(files).then(data => {
  const result = data.reduce((acc, next) => +acc + +next, 0);
	fs.promises.writeFile('res.txt', `${result}`);
}).catch(err => {
	console.log('что-то пошло не так');
});