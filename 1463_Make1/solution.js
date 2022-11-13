let input = Number(require('fs').readFileSync('example.txt').toString().trim());

let result = Array(input + 1);
result[1] = 0; // 1일 경우 -> 연산 0회
result[2] = 1; // 2일 경우 -> 연산 1회
result[3] = 1; // 3일 경우 -> 연산 2회

for(let i = 4; i < input + 1; i++) {
    // 1을 빼는 경우
    let min = result[i-1] + 1;
    if(i%3 === 0) {
        // 3으로 나누는 경우
        min = Math.min(min, result[i/3] + 1);
    }
    if(i%2 === 0) {
        // 2로 나누는 경우
        min = Math.min(min, result[i/2] + 1);
    }

    result[i] = min;
}

console.log(result[input]);