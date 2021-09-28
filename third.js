import fs from 'fs';

async function func() {
	try {
		let names = ['file1.txt', 'file2.txt'];
		let data = [];
		
		for (let name of names) {
			await fs.promises.writeFile(`${name}`, String(Math.random() * 0.5));
		}
    
    for (let name of names) {
			data.push(await fs.promises.readFile(name, 'utf8'))
		}
    const result = data.reduce((acc, next) => +acc + +next, 0);
		
		await fs.promises.writeFile('res1.txt', `${result}`);
	} catch (err) {
		console.log('что-то пошло не так', err);
	}
}

func();