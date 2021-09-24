const path = require('path');

console.log('Name of file:', path.basename(__filename));

console.log('Name of directory:', path.dirname(__filename));

console.log('Расширение : ', path.extname(__filename));

console.log('Parse: ', path.parse(__filename));
//* root, dir, base, ext, name

console.log(path.join(__dirname, 'server', 'index.html'));
