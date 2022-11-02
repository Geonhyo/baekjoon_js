const [n, nums] = require('fs').readFileSync('example.txt').toString().trim().split('\n');
// nums.split(' ').map(num => numList.push(Number(num)));
// push를 사용 시 메모리 사용량이 2~3배 증가하였음
let numList = nums.split(' ').map(num => Number(num));
let min = numList[0];
let max = numList[0];
let i = 0;
while (i < n) {
    if(numList[i] < min) {
        min = numList[i];
    }
    if(numList[i] > max) {
        max = numList[i];
    }
    i++;
}

console.log(`${min} ${max}`);

console.log(`${Math.min(...numList)} ${Math.max(...numList)}`)