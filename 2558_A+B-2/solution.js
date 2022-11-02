const [a,b] = require('fs').readFileSync('example.txt').toString().trim().split('\n');
console.log(parseInt(a) + parseInt(b));
// parseInt(a) 대신 Number(a) 사용 가능