const [nWine, ...wine] = require('fs').readFileSync('example.txt').toString().split("\n").map(Number);
let result = Array(wine.length);

result[0] = 0;
result[1] = wine[0];
result[2] = wine[0] + wine[1];
for (let i = 3; i< wine.length + 1; i++) {
    result[i] = Math.max(result[i-1], result[i-2] + wine[i-1], result[i-3] + wine[i-1] + wine[i-2]);
}

console.log(result[wine.length]);