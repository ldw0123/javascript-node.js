// function
function allArithemics (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
  console.log(`${x} - ${y} = ${x - y}`);
  console.log(`${x} * ${y} = ${x * y}`);
  console.log(`${x} / ${y} = ${x / y}`);
}

let a = 3, b = 4;
allArithemics(a, b);

let c = 10, d = 2;
allArithemics(c, d);

let e = 7, f = 5;
allArithemics(e, f);
console.log();

// input을 받아 output을 return
function add(x, y) {
  return x + y; // ⭐️ 값을 반환
}

let z = add(2, 3);

console.log(z);

console.log(add(4, 5));

console.log(
  add(add(6, 7), add(8, 9))
);

function isOdd (x) {
  return !!(x % 2);
}

let num = 12;

console.log(
  `${num}(는)은 ${
    isOdd(num) ? '홀' : '짝'
  }수입니다.`
);

// input으로 받는 값: 인수와 매개변수
function add(x, y) { // x, y를 매개변수(parameter)라 부름
  return x + y;
}

let z2 = add(2, 3); // a, b를 인수(argument)라 부름

// 꼭 매개변수를 받거나 값을 반환하는 것은 아님
let currentTemp = 24.5;

function logCurrentTemp () {
  console.log(`현재 온도는 섭씨 ${currentTemp}도입니다.`);
}

console.log('반환값:', logCurrentTemp()); // return 문이 정의되어 있지 않으면(함수의 return값이 없으면) undefined 반환

// ⭐️ return문은 꼭 마지막에
function add (x, y) {
  console.log(`${x}와 ${y}을(를) 더합니다.`);
  return x + y;
  console.log(`결과는 ${x + y}입니다.`);  // 출력x
}

console.log(add(2, 7));

// 💡 호이스팅 hoisting
// 함수는 실행문보다 나중에 정의하는 것이 가능. 변수나 상수는 불가능! (var 제외)
console.log(add(2, 7));

function add (x, y) {
  return x + y;
}
console.log();

// 함수를 정의하는 방법
// 1. 함수 선언
function add (x, y) {
  return x + y;
}

console.log(add(2, 7));

// 2.상수나 변수에 함수를 대입 (함수도 값)
// 함수를 변수에 할당함(일급 객체)
const subt = function (x, y) {  // 함수의 이름이 subt이기 때문에, 따로 이름 설정x
  return x - y;
}

console.log(subt(7, 2));

function add (x, y) {
  return x + y;
}

console.log(add(2, 7));

// 💡 기존의 함수를 재정의하는것도 가능 (오버라이딩)
add = function (x, y) {
  console.log(`${x}와 ${y}를 더합니다.`);
  console.log(`결과는 ${x + y}입니다.`);
  return x + y;
}

console.log(add(2, 7));

// 3. 화살표 함수
// 한 줄 안에 값만 반환시. 매개변수를 받고 값을 반환할 때 주로 사용
const mult = (x, y) => x * y; // 블록 없는 화살표 함수에는 return 필요x

console.log(mult(2, 7));

// 두 줄 이상의 작업이 있을 시
const mult2 = (x, y) => {
  console.log(`${x}와 ${y}를 곱합니다.`);
  console.log(`결과는 ${x * y}입니다.`);
  return x * y; // return 필요함
};

console.log(mult2(2, 7));

// 인자가 하나일 때는 괄호 없이 선언 가능
const pow = x => x ** 3;  // x^3
console.log(pow(3));

// ⚠️ 2번과 3번 방법으로 선언한 함수는 호이스팅(함수를 실행문 보다 나중에 정의하는 것)되지 않음
console.log(div(8, 4));

const div = function (x, y) {
  return x / y;
}

console.log(div2(8, 4));

const div2 = (x, y) => x / y;