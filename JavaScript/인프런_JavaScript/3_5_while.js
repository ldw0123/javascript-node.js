// while
let x = 0;

while (x < 10) {
  console.log(x++);
}
console.log();

// 무한루프
let x2 = 0;

// while (x2 < 10) {
//    console.log(x2);
// }

// 인위적인 무한반복에 널리 쓰이는 코드
// while (true) {
//    console.log('무한반복');
// }

let x3 = 0;

while (true) {
  if (x3++ >= 5) break; // break문으로 무한반복 탈출 가능
  console.log(x3); // 1 ~ 5 출력
}
console.log();

// continue와 break 사용
// 1, 3, 5, 7을 의도한 코드. 그러나 ⚠️ 무한루프! 왜일까요?
let x4 = 0;
// while (x4 < 14) {
//   if (x4 % 2 === 0) continue;  // x가 짝수일 때 continue가 실행되어 console.log(x4++);가 실행되지 않음. continue문은 현재 반복을 중단하고 다음 반복으로 넘어가게 함
                                  // 따라서, x4의 값이 증가하지 않아 while의 조건이 항상 참이 되어 무한루프에 빠짐
//   if (x4 > 7) break;
//   console.log(x4++);
// }

// 짧게 짠 수정 코드1
console.log('짧게 짠 수정 코드1');
let y1 = 0;
while (y1 < 14) {
  if (y1++ % 2 === 0) continue; // y가 짝수이면 y값 1 증가 후에 continue 실행
  if (y1 > 8) break;
  console.log(y1 - 1);  // x가 1 증가했기 때문에 1을 뺌
}
console.log();

// 짧게 짠 수정 코드2
console.log('짧게 짠 수정 코드2');
let y2 = 0;
while (y2 < 14) {
  if (++y2 % 2 === 0) continue; // y값 1 증가 후에 y가 짝수인지 조건식이 평가됨
  if (y2 > 7) break;
  console.log(y2);
}
console.log();

// 가독성 위주로 짠 코드. 코드에 의도가 드러나도록
let x6 = 0;
while (x6 < 14) {
  const toContinue = x6 % 2 === 0; // 짝수
  const toBreak = x6 > 7; // 7보다 큰 수
  const xNow = x6++; // x6값 1 증가 (0 -> 1, 2 -> 3)

  if (toContinue) continue; // 짝수이면. x6의 값은 항상 홀수이기 때문에 continue문이 실행되지 않음
  if (toBreak) break; // 7보다 크면

  console.log(xNow); // x6을 실행하고 x6값 1 증가 (1 -> 2, 3 -> 4)
}
console.log();

// 더 짧고도 직관성을 유지한 코드의 예
let x7 = 0;
while (x7 < 14) {
  const xNow = x7++;

  if (xNow % 2 === 0) continue; // x7의 값은 항상 홀수이기 때문에 continue문이 실행되지 않음
  if (xNow > 7) break;

  console.log(xNow);
}
console.log();

// do while: 일단 수행하고 조건을 평가
let x8 = 12;

do {
  console.log(x8++); // 일단 수행해서 12를 출력
} while (x8 < 10);