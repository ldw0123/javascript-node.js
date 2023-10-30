// for문
for (let i = 0; i < 5; i++) { // 💡 변수이므로 let이 사용됨
  console.log(i);
}
console.log();

for (let i = 0; i < 5;) {
  console.log(i++); // ++i로 바꿔볼 것
}
console.log();

for (let i = 10; i >= 0; i-= 2) {
  console.log(i);
}
console.log();

for (let i = 1; i <= 9; i++) { // 구구단
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
console.log();


for (let x = 0, y = 10; x <= y; x++, y--) {
  console.log('x:'+x , 'y:'+y);
}
console.log();

for (
  let x = true, y = 0, z = 0;
  y * z < 10;
  x = !x, x ? y++ : z++   // x를 각 턴마다 true와 false를 반전함
) {
  console.log('y:'+y, 'z:'+z);
}
console.log();

// 무한루프

// let x = 0;
// for (;;) {
//   console.log(x);
// }

// for (let i = 0; i < 10; i++) { // 매 턴마다 i 1씩 증가
//   console.log(i--);            // 매 턴마다 i 1씩 감소
// }

// 객체와 배열의 for문
// ⭐️객체: for (키 이름 in 객체명) - 객체의 키들을 순서대로 반환
const lunch = {       // lunch객체
  name: '라면',        // key: name
  taste: '매운맛',     // key: taste
  kilocalories: 500, // key: kilocalories
  cold: false        // key: cold 
}

// key: 키 이름 in 객체명: lunch
for (const key in lunch) { // 💡 변하는 값이 아니므로 const 사용. lunch객체의 값을 key에 복사
  console.log(key, ':', lunch[key])
}

for (const k in lunch) {   // 키의 이름은 자유롭게 사용 가능
  console.log(k, ':', lunch[k])
}
console.log();

// ⭐️배열: for (항목 of 배열명) - 배열의 항목들을 순서대로 반환
// 정확히는 이터러블 iterable(배열도 그 일종)에 사용됨. 이후 배울 것
const list = [1, '가나다', false, null];

for (const item of list) {
  console.log(item);
}
for (const el of list) {  // 항목의 이름은 자유롭게 변경 가능
  console.log(el);
}

// 문자열 역시 이터러블이므로 사용 가능
for (const letter of '안녕하세요~') {
  console.log(letter);
}
console.log();

// for ... of문의 장점
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 예제 1
for (let i = 0; i < numbers.length; i++) {  // ⚠️ 변수(i)를 사용하므로 위험요소 존재
  // 이곳에 i를 변경하는 코드가 들어간다면...
  console.log(numbers[i]);
}
console.log();

for (const num of numbers) {  // ⭐️ 변수를 사용하지 않음으로 보다 안전. numbers배열의 값을 num에 복사
  console.log(num);
}
console.log();

// 예제 2
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];
for (let num of numbers1) {   // numbers1 배열의 값을 num에 복사
  num++; // ⚠️ numbers1의 값을 참조하는 것이 아닌, 복사한 값. let 사용 주목. numbers1의 요소의 값이 변경되지 않음
  numbers2.push(num + 1); // numbers2의 요소의 값이 2씩 증가
}
console.log(numbers1, numbers2);
console.log();

for (let i = 0; i < numbers1.length; i++) {
  numbers1[i]++; // ⚠️ 실제 값에 인덱스로 접근 - 원본 배열(numbers1)의 내용 변경
}
console.log(numbers1, numbers2, '\n');

// continue와 break

console.log("3의 배수를 건너뛰고 출력");
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;  // continue: 한 루프를 건너뜀
  console.log(i);
}
console.log('for 루프 종료\n');

console.log("i === 5 이면 반복문 종료");
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;   // break:  블록을 종료하고 빠져나옴
  console.log(i);
}
console.log('for 루프 종료\n');

// label: 중첩된 반복문을 명명하여 continue 또는 break에 사용. 별로 사용x
outer:
for (let i = 1; i < 10; i++) {

  inner:
  for (let j = 1; j < 10; j++) {

    if (j % 2 === 0) continue inner;  // j가 짝수일 때 inner 레이블을 건너뛰어라
    if (i * j >= 30) continue outer;  // i * j >= 30일 때 outer 레이블을 건너뛰어라
    
    if (j > 8) break inner;
    if (i - j > 7) break outer;

    console.log(i, j, i * j);
  }
}
