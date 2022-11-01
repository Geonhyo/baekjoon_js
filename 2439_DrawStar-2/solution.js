const num = require('fs').readFileSync('example.txt').toString().trim();

let star = "";
for (let i = 0; i < num ; i++) {
    for (let j = 0; j < num - i -1 ; j++){
        star += " ";
    }
    for (let j = 0; j < i+1 ; j++){
        star += "*";
    }
    star += "\n";
}

console.log(star);