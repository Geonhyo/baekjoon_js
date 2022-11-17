let input = require('fs').readFileSync('example.txt').toString().split('').map(Number);

let result = Array(input.length + 1).fill(0);
let num = 0;
// 요소 갯수가 0 혹은 1개일 경우 가능한 경우는 1가지 (추가 경우 없음)
result[0] = 1;
result[1] = 1;

if(input[0] === 0) {
    result[input.length] = 0;
}
else {
    for (let i = 2; i < input.length + 1; i++) {
        if(input[i-1] > 0) {
            result[i] += result[i-1];
        }
        num = input[i-1] + 10 * input[i-2];
        if(num >= 10 && num <= 26) {
            result[i] += result[i-2];
        }
    }
}


console.log(result[input.length] % 1000000);

