const [input0,...input1] = require('fs').readFileSync('example.txt').toString().toString().trim().split('\n');

let result = '';
let sum = 0;

input1.map((line,index) => {
    line.split(' ').map(num => sum += Number(num));
    result += `Case #${index + 1}: ${sum}\n`;
    sum = 0;
})

console.log(result);