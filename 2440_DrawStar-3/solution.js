const num = parseInt(require('fs').readFileSync('example.txt').toString().trim());

let star = "";
// sol 1
for (let i = 0; i < num ; i++) {
    for (let j = 0; j < num - i ; j++){
        star += "*";
    }
    star += "\n";
}

// sol 2
// parseInt 를 하지 않을 시 처음 i에 string이 들어감
// 처음에 i+1이 6이 아닌 51로 입력됨

/*for (let i = num; i > 0 ; i--) {
    for (let j = 0; j < i + 1 ; j++){
        star += "*";
    }
    star += "\n";
}*/

console.log(star);