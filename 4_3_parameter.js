// 매개변수
function add(a, b) {
  return a + b;
}

console.log(
  add(1, 3),
  add(1, 3, 5), // 함수의 매개변수 갯수를 넘어가는 인수는 오류를 일으키지 않고 무시됨
  add(1, 3, 5, 7)
);
console.log();

// 1. 기본값 매개변수 default parameter
function add2(a = 2, b = 4) {
  console.log(`${a} + ${b}`);
  return a + b;
}

console.log(
  add2(),           // 6
  add2(1),          // 5
  add2(1, 3), '\n'  // 4
);

// 2. arguments - 함수 내에서 사용가능한 지역 변수
// 배열의 형태를 한 객체 - 배열은 아니지만 사실상 배열처럼 동작 (배열도 사실 객체지만...)
// 함수 호출 시 전달된 모든 인수들을 배열 형태로 가짐
function add3(a, b) {
  console.log('1.', arguments);
  console.log('2.', arguments[0]);
  console.log('3.', typeof arguments);
  return a + b;
}

console.log(
  '4.', add3(1, 3, 5, 7), '\n'  // 배열처럼 동작
);

// for ... of가 가능한 이유: iterable이기 때문 (이후 다룸)
// ⚠️ 화살표 함수에서는 arguments 사용 불가! 화살표 함수로 바꾸어 실행해 볼 것
function add4(a, b) {
  for (const arg of arguments) {  // for (항목 of 배열명): 배열의 항목들을 순서대로 반환
    console.log(arg);
  }
  return a + b; // 1+3
}

console.log(
  add4(1, 3, 5, 7), '\n'
);

function getAverage() {
  let result = 0;
  for (const num of arguments) {
    result += num;
  }
  return result / arguments.length;
}

console.log(
  getAverage(1, 4, 7),
  getAverage(24, 31, 52, 80), '\n'
);

// 💡 타입에 안전한 버전
function getAverage() {
  let result = 0, count = 0;
  for (const num of arguments) {
    if (typeof num !== 'number') continue; // num이 숫자가 아닐 경우 건너뛰어라
    result += num;
    count++;
  }
  return result / count;
}

console.log(
  getAverage(2, '가', 8, true, 5), '\n'
);

// ♻️새로고침 후 실행
const add5 = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function combineArms() {
  return (x, y) => {
    let result = x;
    for (const arm of arguments) { // 배열의 요소들을 순서대로 (반복해서)반환. arm변수는 arguments배열의 각 요소를 의미
      if (typeof arm !== 'function') continue; // 함수가 아닐경우 건너뛰어라
      result = arm(result, y); // result = add5(8,3); , result = mul(8,3);
    }
    return result; // 11 반환
  }
}

const add_mul = combineArms(add5, mul, 1, true); // 1, true는 함수가 아니므로 상관x
const add_mul_sub = combineArms(add5, mul, sub);
const add_mul_sub_div = combineArms(add5, mul, sub, div);
const add_mul_sub_div_pow   // 💡마지막 매개변수로 익명 함수 사용됨
  = combineArms(add5, mul, sub, div, (x, y) => x ** y);        

console.log(
  add_mul(8, 3),                   // (8+3)*3 == 33
  add_mul_sub(8, 3),               // ((8+3)*3)-3 == 30
  add_mul_sub_div(8, 3),           // 10
  add_mul_sub_div_pow(8, 3), '\n'  // 1000
);

// 3. ...변수그룹명 - 나머지 변수 rest parameters
// 특정 매개변수들 뒤에 정해지지 않은 수의 매개변수들을 받을 때 마지막 인자로만 사용 가능
// arguments와는 달리 실제 배열임
console.log(
  '3.',
  classIntro(3, '김민지', '영희', '철수', '보라') 
); // 호이스팅

function classIntro (classNo, teacher, ...children) { // 영희, 철수, 보라는 childern 변수
  console.log('1.', children);
  console.log('2.', arguments);

  let childrenStr = ''; // false
  for (const child of children) {
    if (childrenStr) childrenStr += ', '; // false일 때만 childernStr 변수에 ', ' 추가
    childrenStr += child;
  }
  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${childrenStr}입니다.` + '\n'
}

const add6 = (a, b) => a + b;
const sub6 = (a, b) => a - b;
const mul6 = (a, b) => a * b;
const div6 = (a, b) => a / b;

function doMultiArms (x, y, ...arms) {
  let result = x;
  for (const arm of arms) { // 반복해서 arms의 요소들을 가져와서 arm에 저장. (add6, mul6, ...)
    if (typeof arm !== 'function') continue;
    result = arm(result, y);
  }
  return result;
}

console.log(
  doMultiArms(8, 3, add6, mul6, 1, true),
  doMultiArms(8, 3, add6, mul6, sub6),
  doMultiArms(8, 3, add6, mul6, sub6, div6),
  doMultiArms(8, 3, add6, mul6, sub6, div6, (x, y) => x ** y)
  );