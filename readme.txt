12 43 56


Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.
Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.
Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.
Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.Представим, что у вас есть достаточно большой файл, скажем размером в 100 мегабайт. Пусть мы хотим что-то сделать с данными этого файла. Очевидно, что для этого нужно прочитать содержимое этого файла в переменную:

let data = await fs.promises.readFile('readme.txt', 'utf8');
console.log(data);
Проблема в том, что в таком случае все 100 мегабайт нашего файла попадут в оперативную память сервера. Поэтому попытка одновременно прочитать десяток-другой таких файлов запросто исчерпает доступную нам память сервера, что приведет к его падению.

Для решения такой проблемы придуманы потоки. Потоки позволяют прочитывать файл по кусочкам. Давайте посмотрим, как это делается. Для начала создадим поток чтения с помощью метода createReadStream:

let readableStream = fs.createReadStream('readme.txt', 'utf8');
Теперь прочитаем наш файл по кусочкам:

readableStream.on('data', function(chunk) { 
	console.log(chunk);
});
Задача 1hash.txt: nd.Pm.FS.St

Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль.

Потоки записи
Можно также создавать потоки записи. Это делается с помощью метода createWriteStream:

let writeableStream = fs.createWriteStream('writeme.txt');
Давайте что-нибудь запишем в наш поток с помощью метода write:

writeableStream.write('text1\n');
writeableStream.write('text2\n');
writeableStream.write('text3\n');
Завершим процедуру записи с помощью метода end:

writeableStream.end();
Задача 2hash.txt: nd.Pm.FS.St

Запишите в файл столбец чисел от одного до миллиона.

Чтение и запись
Можно прочитывать один файл, записывая по частям его данные в другой файл:

let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});
Задача 3hash.txt: nd.Pm.FS.St

Дан файл большого размера. Напишите код, который сделает три копии этого файла.