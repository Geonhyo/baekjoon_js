const num = Number(require('fs').readFileSync('example.txt').toString().trim());
let n = 1;
let result = 0;
while(n <= num){
    result += n;
    n++;
}
console.log(result);