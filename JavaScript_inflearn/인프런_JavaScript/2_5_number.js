// 자바스크립트에는 정수와 실수의 자료형이 따로 있지 않음
let integer = 100;
let real = 1.234;
let negative = -5.67;

console.log(
  typeof integer,     // number
  typeof real,        // number
  typeof negative     // number
  + '\n'
);

// 무한대
let x = 1 / 0;
console.log(x, typeof x);     // 무한대는 Infinity라는 값으로 반환됨
// 무한대에는 양음이 있음
console.log(-x, typeof -x);
let y = -1 / 0;

console.log(y, typeof y);
let z = Infinity;             // Infinity도 예약어
console.log(z, typeof z);
console.log();

// 숫자가 아닌 것: Not a Number
let x1 = 1 / 'abc';           // NaN
let y1 = 2 * '가나다';
let z1 = NaN;

console.log(x1, typeof x1);   // NaN의 자료형: 숫자
console.log(y1, typeof y1);
console.log(z1, typeof z1);

// NaN은 양음이 없음
console.log(-NaN);

// 주어진 값이 NaN인지 여부 확인하는 방법
let x2 = 1 / 'abc';

console.log(
  x2,
  x2 == NaN,
  x2 === NaN,
  isNaN(x2),       // 숫자가 아닐 시 true 반환
  Number.isNaN(x2) // 보다 엄격한 버전. 숫자 자료형인 데다가 숫자가 아니어야만 true 반환
  + '\n'
)

// 연산자
let x3 = 10;
let y3 = x3 * 10; 

console.log(y3);    // 100

console.log(
  y3 + 1,  // 덧샘
  y3 - 1,  // 뺄셈
  y3 * 2,  // 곱셈
  y3 / 5,  // 나눗셈
  y3 % 3,  // 나머지
  y3 ** 2  // 제곱(최신 기능)   // Math.pow(100, 2); -> 10000 예전 기능
);

console.log(y3);

// 널리 사용되는 홀수와 짝수의 판별법
console.log(
  '홀수: ',
  123 % 2,
  55 % 2,
  999 % 2
);
console.log(
  '짝수: ',
  2 % 2,
  100 % 2,
  8 % 2
);

// 괄호
console.log(
  4 * 1 + 2,
  4 * (1 + 2),
  4 * -(1 + 2),
  -(4 * -(1 + 2))
  + '\n'
);

// 단항 산술 연산자
let x4 = 10;

console.log('1.', x4++, x4); // 값을 반환부터 하고 증가
console.log('2.', ++x4, x4); // 값을 증가부터 하고 반환

let x5 = 3;
let y5 = 4;
console.log(x5-- * --y5, x5, y5 +'\n'); // 💡부수효과가 일어나는 시점

// 문자열을 숫자로 바꿈
console.log(
  +'100', // String -> num
  typeof(+100),
  -'100',
  typeof(-100),
  +'abc', // 숫자로 변환될 수 없는 문자열
);

let x6 = '100';
console.log(x6++, x6);
let y6 = '100';
console.log(--y6, y6);

// 숫자로 변환될 수 없는 문자열
// 첫 번째 값 주의 - 증가 이전에도 변환
let z6 = 'abc';
console.log(z6++, z6, "\n");

// 할당 산수 연산자
let x7 = 3;

x7 += 2;
console.log(x7);

x7 -= 3;
console.log(x7);

x7 *= 12;
console.log(x7);

x7 /= 3;
console.log(x7);

x7 %= 5;
console.log(x7);

x7 **= 4;         // 3의 4제곱
console.log(x7)   // 81

let y7 = 25;

console.log(
  y7 **= 0.5, // 할당된 결과 반환
  y7
);
