const [month, day] = require('fs').readFileSync('example.txt').toString().split(" ");
const dateList = ["SUN", "MON","TUE", "WED", "THU", "FRI", "SAT"]

console.log(dateList[new Date(`2007-${month}-${day}`).getDay()]);
console.log(dateList[new Date(2007, parseInt(month)-1,parseInt(day)).getDay()]);
