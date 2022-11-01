const input = require('fs').readFileSync('example.txt').toString().split(" ");
const month = parseInt(input[0]);
const day = parseInt(input[1]);
let days;

const dateList = ["SUN", "MON","TUE", "WED", "THU", "FRI", "SAT"]

if(month === 1) {
    days = day;
}
else if(month === 2) {
    days = day + 31;
}
else if(month <= 7) {
    days = day + (month - 1) * 30 + Math.ceil((month - 1)/2) - 2;
}
else {
    days = day + (month - 1) * 30 + Math.ceil(month/2) - 2;
}

console.log(dateList[days%7]);