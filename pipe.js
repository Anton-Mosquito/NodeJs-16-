import fs from 'fs';
import { createGzip } from 'zlib';

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('res.txt');

// readableStream.pipe(writeableStream)

// readableStream.pipe(createGzip()).pipe(writeableStream);
let writeableStreamArray = [];

for (let index = 1; index <= 3; index++) {
  writeableStreamArray.push(fs.createWriteStream(`count${index}.txt`));
}


writeableStreamArray.forEach((item) => {
  readableStream.pipe(createGzip()).pipe(item);
})