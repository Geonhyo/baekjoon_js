const num = Number(require('fs').readFileSync('example.txt').toString().trim());
let result ='';
let n = 1;
while (n <= num) {
    result += `${n}\n`;
    n++;
}

console.log(result);