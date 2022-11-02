// N번째 줄에 2N-1 개의 별을 가운데 정렬로 찍는 문제

const num = parseInt(require('fs').readFileSync('example.txt').toString().trim());
let star = '';
for (let i = 0; i < num; i++) {
    for(let j = 0; j < num-i-1; j++){
       star += " ";
    }
    for(let j = 0; j < 2*i+1; j++){
        star += "*";
    }
    star += '\n';
}

console.log(star);