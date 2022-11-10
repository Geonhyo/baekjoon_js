const [...input] = require('fs').readFileSync('example.txt').toString().toString().trim().split('\n');

let result = '';

input.map(line => result += `${line}\n`);

console.log(result);