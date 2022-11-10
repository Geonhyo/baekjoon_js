const [input0, input1] = require('fs').readFileSync('example.txt').toString().toString().split('\n');

let result = 0;

for (let i = 0; i < Number(input0); i++) {
    result += Number(input1[i]);
}

console.log(result);