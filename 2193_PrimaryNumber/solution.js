const num = Number(require('fs').readFileSync('example.txt').toString());
let result = Array(90);

/*
 * 1자리 => 1
 * 2자리 => 10
 * 3자리 => 100, 101
 * 4자리 => 1000, 1001, 1010 => 10 + 00, 01, 10
 * 5자리 => 10000, 10001, 10010, 10100, 10101 => 10 + 100, 101, 000, 001, 010
 *
 * 마지막 자리가 0인 경우 0, 1 모두 올 수 있음
 * 마지막 자리가 1인 경우 0만 올 수 있음
 *
 * F(N) = F(N-1) + F(N-2)
 *
 * 피보나치 수열의 경우 Number로 처리할 경우 overflow가 발생한다.
 * Number가 아닌 BigInt 형을 사용하며
 * 출력 시에 BigInt의 경우 마지막 자리에 n이 나타나 이를 없애기 위해서는 String 형으로 출력해야한다
 */

result[0] = 1;
result[1] = 1;
for (let i = 2; i< num; i++) {
    result[i] = BigInt(result[i-1]) + BigInt(result[i-2]);
}

console.log(String(result[num - 1]));