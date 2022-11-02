const num = Number(require('fs').readFileSync('example.txt').toString().trim());
let result = '';

// 방법 1
for (let i = 0; i < 9; i++) {
    result += `${num} * ${i + 1} = ${num * (i + 1)}\n`;
}

// 방법 2 - 약 1.25배 빠름
let mul = 1;
while (mul < 10){
    result += `${num} * ${mul} = ${num * mul}\n`;
    mul++;
}

console.log(result);