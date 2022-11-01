const num = require('fs').readFileSync('example.txt').toString().trim();

for (let i = 0; i < num ; i++) {
    for(let j = 0; j < i+1 ; j++) {
        process.stdout.write('*')
    }
    process.stdout.write('\n')
}