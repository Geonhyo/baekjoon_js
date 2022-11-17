let num = Number(require('fs').readFileSync('example.txt').toString());

// 3 X N 의 타일을 2 X 1 혹은 1 X 2 타일로 채운다

/*
 * 조건 1. N = 2k 일 것
 * N = 0 <=> k = 0 => F(0) = 1
 * N = 2 <=> k = 1 => F(1) = 3
 * N = 4 <=> k = 2 => F(2) = F(1) X 3 + F(0) X 2
 * N = 6 <=> k = 3 => F(3) = F(2) X 3 + F(2) X 2 + F(0) X 2
 *
 * N = 2m <=> k = m => F(m) = F(m-1) X 3 + F(m-2) X 2 + ... + F(0) X 2
 */

let result = Array(16);
result[0] = 1;
result[1] = 3;

for (let i = 2; i < num/2 + 1; i++) {
    result[i] = result[i-1] * 3; // 2 X 3 타일 추가
    for (let j = 2; j < i + 1; j++) {
        result[i] += result[i-j] * 2; // 1 X N + 2 X 1 + 2 X (N-2) + 2 X 1
    }
}

if(num%2 === 0) {
    console.log(result[num/2]);
} else {
    console.log(0);
}

