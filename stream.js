import fs from 'fs';

// let readableStream = fs.createReadStream('readme.txt', 'utf8');

// readableStream.on('data', function(chunk) { 
// 	console.log(chunk);
// });


// let writeableStream = fs.createWriteStream('res.txt');
// let iterator = 1;
// while (iterator <= 1_000_000) {
//   writeableStream.write(`${iterator}\n`);
//   iterator++;
// }

// writeableStream.end();

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStreamArray = [];

for (let index = 1; index <= 3; index++) {
  writeableStreamArray.push(fs.createWriteStream(`count${index}.txt`));
}

readableStream.on('data', function(chunk) {
  writeableStreamArray.forEach((item) => {
    item.write(chunk);
  })
});