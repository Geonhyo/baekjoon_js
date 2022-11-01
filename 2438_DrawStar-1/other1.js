const num = require('fs').readFileSync('example.txt').toString().trim();

let result = "";
for (let i = 0; i < num ; i++) {
    for(let j = 0; j < i+1 ; j++) {
        result += '*';
    }
    result += "\n";
}

console.log(result);