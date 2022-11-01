const [month, date] = require('fs').readFileSync('example.txt').toString().split(" ");
const dayList = ["SUN", "MON","TUE", "WED", "THU", "FRI", "SAT"]

console.log(dayList[new Date(`2007-${month}-${date}`).getDay()]);
console.log(dayList[new Date(2007, parseInt(month)-1,parseInt(date)).getDay()]);
