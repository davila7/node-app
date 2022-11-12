const { readFileSync, writeFileSync } = require('fs');

const reados = readFileSync('./os.js', 'utf8');
console.log(reados);