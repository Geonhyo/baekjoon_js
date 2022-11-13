let input = Number(require('fs').readFileSync('example.txt').toString().trim());

let result = Array(input + 1);
result[0] = 0;

for(let i = 1; i <= input ; i++) {
    let min = result[i-1] + 1; // 이전 수에 1^2을 더함
    for(let j = 2; j <= Math.sqrt(i) ;j++) {
        min = Math.min(min, result[i - Math.pow(j,2)] + 1)
    }
    result[i] = min;
}

console.log(result[input]);