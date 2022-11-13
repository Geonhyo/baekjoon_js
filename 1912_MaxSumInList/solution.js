let [count, numList] = require('fs').readFileSync('example.txt').toString().trim().split('\n');

count = Number(count);
numList = numList.split(' ').map(Number);

let result = [...numList];
let max = 0;

for (let i = 0; i < count; i++) {
    result.push(0);
    result = numList.map((num, idx) => num + result[idx + 1]);
    result.pop();

    max = Math.max(...result, max);
}

console.log(max);