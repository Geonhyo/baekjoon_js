const num = Number(require('fs').readFileSync('example.txt').toString().trim());
let result = "";

result += " ".repeat(num -1) + "*\n";
for (let i = 0; i < num - 2; i++) {
    result += " ".repeat(num - 2 - i);
    result += "*" + " ".repeat(2*i + 1) +"*\n";
}

if(num > 1) {
    result += "*".repeat(2*num-1) + "\n";
}

console.log(result);