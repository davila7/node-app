const { readFileSync, writeFileSync } = require('fs');

const reados = readFileSync('./os.js', 'utf8');
console.log(reados);

writeFileSync('./text1.txt', `test de texto creado por node`);