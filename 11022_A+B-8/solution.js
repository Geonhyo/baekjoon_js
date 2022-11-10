const [input0,...input1] = require('fs').readFileSync('example.txt').toString().toString().trim().split('\n');

let result = '';
let sum = 0;

input1.map((line,index) => {
    result += `Case #${index + 1}: `;
    line.split(' ').map((num, index) => {
        result += `${num} `;
        if(index === 0) {
            result += `+ `
        }
        sum += Number(num)
    });
    result += `= ${sum}\n`;
    sum = 0;
})

console.log(result);