// N번째 줄에 2N-1 개의 별을 가운데 정렬로 찍는 문제

const num = parseInt(require('fs').readFileSync('example.txt').toString().trim());
let star = '';
for (let i = 0; i < num; i++) {
    star += "*".repeat(i+1) + " ".repeat(2*num - 2*i - 2) + "*".repeat(i+1) + '\n';
}
for (let i = num-1; i > 0; i--) {
    star += "*".repeat(i) + " ".repeat(2*num - 2*i) + "*".repeat(i)+ '\n';
}
console.log(star);