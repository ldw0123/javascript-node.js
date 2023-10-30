// 일급 객체 First Class Object: 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체
// 자바스크립트의 함수도 일급 객체. 함수는 기본적으로 객체
// 일급 객체의 특성:
// 1. 상수 또는 변수에 할당될 수 있음
// 2. 다른 함수에 매개변수로 전달될 수 있음
// 3. 다른 함수의 결과값으로서 반환될 수 있음
// 즉, 함수를 변수나 데이터(string, number, boolean, array, object) 다루 듯이 다룰 수 있다는 점이다.
// 여기서 데이터를 다룬다는 의미는 변수에 할당이 가능하다는 것으로, 함수 역시 할당이 가능하다는 의미이다.

// 1. 할당
function isOddNum(number) {
  console.log(number + '은(는)',
    (number % 2 ? '홀' : '짝')
    + '수입니다.'
  );
  return number % 2 ? true : false;
};

const checkIfOdd = isOddNum; // 함수를 변수에 할당. 뒤에 괄호 없음 유의!

console.log(checkIfOdd(73));


let x = 7, y = 3;

let func1 = (a, b) => a + b;
let func2 = (a, b) => a - b;
console.log(func1(x, y), func2(x, y));

func1 = func2
console.log(func1(x, y), func2(x, y));
// 함수도 객체와 배열처럼 참조타입

// 💡객체와 배열의 값으로도 할당 가능
let person = {
  name: '홍길동',
  age: 30,
  married: true,
  introduce: function (formal) {
    return formal
      ? '안녕하십니까. 홍길동 대리라고 합니다.' // married가 true
      : '안녕하세요. 홍길동이라고 해요.';     // married가 false
  }
};

console.log(person.introduce(true));
console.log(person.introduce(false));

let arithmetics = [ // arithmetics 배열
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b
];

for (arm of arithmetics) {  // for (항목 of 배열명): 배열의 항목들을 순서대로 반환. 배열의 인덱스가 아닌 값에 접근하므로 편리함
  console.log(arm(5, 3));
}

// ⭐️객체에 함수 프로퍼티를 포함할 때 기억할 것
let person2 = {
  name: '홍길동',
  age: 30,
  married: true,
  introduce: function () {
    return `저는 ${this.name}, ${this.age}살이고 `  // 💡객체의 다른 프로퍼티에 접근: this 사용
      + `${this.married ? '기혼' : '미혼'}입니다.`;
  },
  introduce2: function () { 
    return this;  // person2 객체를 가리킴
  }
}

console.log(person2.introduce());
console.log(person2.introduce2(), '\n');  // person2 객체를 출력

// 2. 인자로 전달: 함수가 다른 함수를 인자로 전달받음
// 전달받는 함수: 고차 함수 highter-order function
// 전달하는 함수: 콜백 함수 callback function
let list = [1, 2, 3, 4, 5];

function doInArray(array, func) {  // doInArray: 고차 함수
  for (item of array) { // 배열의 항목들을 순서대로 반환
    func(item);
  }
}
// console.log - console이란 객체에서 log란 키에 할당된 함수
doInArray(list, console.log); // console.log: 콜백 함수

// 익명 함수 anonymous function: 변수나 상수에 할당되지 않아 이름이 없음
function doNTimes(func, repeat, x, y) {
  let result = x; // result: 5
  for (i = 0; i < repeat; i++) {  // 3번 반복
    result = func(result, y); // result의 값이 매번 바뀜
  }
  return result;
}

console.log(
  doNTimes((x, y) => x * y, 3, 5, 2), // func(): (x, y) => x * y, repeat: 3, x: 5, y: 2
  doNTimes((x, y) => x / y, 3, 5, 2),
);

// calculate
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// evaluate
const isOdd = (number) => !!(number % 2); // 짝수인지 판별. boolean값을 반환
const isPositive = (number) => number > 0; // 양수인지 판별. boolean값을 반환

function calcAndEval(calc, eval, x, y) {
  return eval(calc(x, y));
}

console.log(
  calcAndEval(add, isOdd, 5, 7), // return isOdd(add(5, 7)) -> return isOdd(12) -> return false
  calcAndEval(subtract, isPositive, 5, 7), // return isPositive(subtract(5, 7)) -> return isPositive(-2) -> return false
  calcAndEval(multiply, isOdd, 5, 7) // return isOdd(multiply(5, 7)) ->  return isOdd(35) -> return true
);
console.log();

// 3. 결과값으로 반환
function getIntroFunc(name, formal) {
  return formal
    ? function () {
      console.log(`안녕하십니까, ${name}입니다.`);
    } : function () {
      console.log(`안녕하세요~ ${name}이라고 해요.`);
    }
}

const hongIntro = getIntroFunc('홍길동', true);
const jeonIntro = getIntroFunc('전우치', false);

hongIntro();
jeonIntro();

const add2 = (a, b) => a + b; // 14
const sub = (a, b) => a - b;  // 6
const mul = (a, b) => a * b;  // 40
const div = (a, b) => a / b;  // 2.5

function comb3ArmFuncs(armFunc1, armFunc2, armFunc3) {
  return (x, y) => armFunc3(armFunc2(armFunc1(x, y), y), y);
}

const add_mul_sub = comb3ArmFuncs(add2, mul, sub); // comb3ArmFuncs(add2, mul, sub); 함수 호출, 매개변수 전달
const mul_add_div = comb3ArmFuncs(mul, add2, div);
const div_add_mul = comb3ArmFuncs(div, add2, mul);

console.log(
  add_mul_sub(10, 4), // ((10+4)*4)-4 == 52
  mul_add_div(10, 4), // 11
  div_add_mul(10, 4)  // 26 
);

// 커링 currying: 필요한 매개변수보다 적은 수의 매개변수를 받으면, 나머지 매개변수를 매개변수로 받는 다른 함수를 반환
// 기존의 코드
function addMultSubt(a, b, c, d) {
  return (a + b) * c - d;
}

const addMultSubt2 = (a, b, c, d) => (a + b) * c - d;

console.log(
  addMultSubt(2, 3, 4, 5),  // 15
  addMultSubt2(2, 3, 4, 5), // 15
);

// 커링으로 작성된 함수1
function curryAddMultSubt(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return (a + b) * c - d; // 15
      }
    }
  }
}

const curryAddMultSubt2 = a => b => c => d => (a + b) * c - d; // 15

console.log(
  curryAddMultSubt(2)(3)(4)(5),
  curryAddMultSubt2(2)(3)(4)(5)
);

// 커링으로 작성된 함수2
const curryAddMultSubtFrom2 = curryAddMultSubt(2);
const curryMultSubtFrom5 = curryAddMultSubt(2)(3);
const currySubtFrom20 = curryAddMultSubt(2)(3)(4);

console.log(curryAddMultSubtFrom2);
console.log(curryMultSubtFrom5);
console.log(currySubtFrom20);
// 화살표 함수로 바꾸어 다시 실행해 볼 것

console.log(
  curryAddMultSubtFrom2(3)(4)(5), // 15
  curryMultSubtFrom5(4)(5),       // 15
  currySubtFrom20(5)              // 15
);