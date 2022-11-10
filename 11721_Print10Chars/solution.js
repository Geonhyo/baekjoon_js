const input = require('fs').readFileSync('example.txt').toString().trim();

let result = "";
for (let i = 0; i < input.length / 10; i++) {
    result += `${input.slice(10 * i, 10 * (i+1))}\n`;
}

console.log(result);