const [input0,...input1] = require('fs').readFileSync('example.txt').toString().toString().trim().split('\n');

let result = '';
let sum = 0;

input1.map(line => {
    line.split(',').map(num => sum += Number(num));
    result += `${sum}\n`;
    sum = 0;
})

console.log(result);