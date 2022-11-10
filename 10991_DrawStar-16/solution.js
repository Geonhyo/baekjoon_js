const num = Number(require('fs').readFileSync('example.txt').toString().trim());
let result = "";
for (let i = 0; i < num; i++) {
    result += " ".repeat(num - i - 1);
    result += "*" + " *".repeat(i) + "\n";
}

console.log(result);