const input = require('fs').readFileSync('example.txt').toString().split(" ");
const month = parseInt(input[0]);
let date = parseInt(input[1]);

const dayList = ["SUN", "MON","TUE", "WED", "THU", "FRI", "SAT"]

if(month === 1) {}
else if(month === 2) {
    date = date + 31;
}
else if(month <= 7) {
    date = date + (month - 1) * 30 + Math.ceil((month - 1)/2) - 2;
}
else {
    date = date + (month - 1) * 30 + Math.ceil(month/2) - 2;
}

console.log(dayList[date%7]);