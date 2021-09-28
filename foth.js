import fs from 'fs/promises';
import __dirname from './__dirname.js';
console.log(__dirname);

async function func() {
	let data = await fs.readFile('readme.txt', 'utf8');
	console.log(data);
}

func();