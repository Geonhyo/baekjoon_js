const input = require('fs').readFileSync('example.txt').toString().toString().trim().split('\n');
let i = 0;
let result = '';
let sum = 0;
while (i < input[0]) {
    input[i+1].split(' ').map(num => sum += Number(num));
    result += `${sum}\n`;
    sum = 0;
    i++;
}

console.log(result);