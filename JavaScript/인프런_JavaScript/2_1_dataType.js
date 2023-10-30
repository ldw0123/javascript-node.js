// 변수와 자료형
const a = true, b = 123.45, c = '안녕하세요!';

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

let d;
console.log(d, typeof d);
d = null;
console.log(d, typeof d); // ⚠️ 'object' 반환

const e = Symbol('hello');
console.log(typeof e); // 이건 나중에

// Boolean
let isEmployed = true;
let isMarried = false;

console.log('직업 있음:', isEmployed);
console.log('기혼:', isMarried);

const aa = 1 > 2;
const bb = 1 < 2;

console.log(a, typeof a);
console.log(b, typeof b);

// Number
let integer = 100;
let real = 12.34;
let negative = -99;

console.log(integer, real, negative);

// String
let first_name = "Brendan";
let last_name = 'Eich';
let description = `미국의 프로그래머로 자바스크립트 언어를 만들었으며 모질라의 CEO와 CTO를 역임했다.`;

console.log(first_name, last_name);
console.log(description);

console.log(
  typeof (typeof true),
  typeof (typeof 123.45),
  typeof (typeof 'Hello'),
);

// undefined
let x;
console.log(typeof x);

let y = 1; // 콘솔에 입력해볼 것

// Null
let x2;
console.log('값 넣기 전', typeof x2);

x2 = null;
console.log('null값 넣은 후', typeof x2);

let x3 = 1;
console.log('변경 전', x3);

x3 = null;
console.log('변경 후', x3);

let x4 = null;
console.log(typeof null, typeof x4);

// null 여부는 아래와 같이 확인할 것
console.log(x === null);