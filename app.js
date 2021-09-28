import { square, cube } from './math.js';
import fs from 'fs';
import { open, read, close } from 'fs';

// console.log('test');
// let one = 1;
// setInterval(function() {
// 	console.log(new Date());
//   console.log(++one);
// }, 1000);

// let res  = square(2) + cube(3);
// console.log(res);

// let text = fs.readFileSync('readme.txt', 'utf8');
// let text1 = fs.readFileSync('readme1.txt', 'utf8');
// console.log( +text + +text1 );

// let object = {
// 	'file1.txt': 'text1',
// 	'file2.txt': 'text2',
// 	'file3.txt': 'text3',
// }

// const obj = Object.entries(object).forEach(([key,value]) => {
//   fs.writeFileSync(key, value);
// }) 

// setInterval(() => {
//   fs.writeFileSync('readme.txt', '!');
// }, 5000);

// try {
// 	let text = fs.readFileSync('readme123123.txt', 'utf8');
// 	console.log(text);
// } catch (err) {
// 	console.log('при чтении файла возникла ошибка', err);
// }
// fs.promises.readFile('readme.txt', 'utf8').then(data => {
//   const x = data.split(' ').reduce((acc,next) => acc + +next, 0)
//   console.log(x);
// });

// fs.promises.readFile('readme123.txt', 'utf8').then(data => {
// 	console.log(data);
// }).catch(err => {
// 	console.log('ошибка');
// });

fs.promises.readFile('readme1.txt', 'utf8').then(data => {
	return fs.promises.writeFile('readme2.txt', data);
}).catch(err => {
	console.log('ошибка',err);
});