const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const count = Number(input[0]);
const numList = input[1].split(' ').map(Number);

let result = Array(count);
result[0] = numList[0];

for (let i = 1; i < count; i++) {
    result[i] = Math.max(numList[i], result[i-1] + numList[i])
}

max = Math.max(...result);

console.log(max);