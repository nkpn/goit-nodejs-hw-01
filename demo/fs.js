//* File system
const fs = require('fs');
const path = require('path');

//* Как создать папку
fs.mkdir(path.join(__dirname, 'test'), err => {
  if (err) {
    throw err;
  }

  console.log('Папка создана');
});

//* Как создать файл
const filePath = path.join(__dirname, 'test', 'text.txt');

fs.writeFile(filePath, 'Hello NodeJS', err => {
  if (err) {
    throw err;
  }
  console.log('Файл создан!');
});

//* Как добавить текст в файл
fs.appendFile(filePath, '\nHello NodeJS again!', err => {
  if (err) {
    throw err;
  }
  console.log('Файл создан!');
});

//* Чтение файла
fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err;
  }

  console.log(content);
});
