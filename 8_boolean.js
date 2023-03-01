// boolean

console.log(true, typeof true);     // boolean 타입
console.log(false, typeof false);   // boolean 타입

let a = 1 === 2;
let b = 'abc' !== 'def'
let c = a !== b;
let d = typeof a === typeof b === true;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log();

// 부정 연산자
console.log(
  true, !true, false, !false
);

console.log(
  true, !true, !!true, !!!true
);

console.log(
  false, !false, !!false, !!!false
);

console.log(
  true === !false,
  1 == '1',    // 타입 체크를 하지 않으니 true
  1 === '1',   // 타입 체크를 하니 false
  typeof false === 'boolean'   // typeof가 반환하는 값은 string
  , '\n'
);

// AND/OR 연산자
console.log(    // &&: 양쪽 모두 true여야 true 반환
  true && true,     // true
  true && false,    // false
  false && true,    // false
  false && false,   // false
);

console.log(    // ||: 한 쪽이라도 true면 true 반환
  true || true,     // true
  true || false,    // true
  false || true,    // true
  false || false,   // false
);

let x = 14;
// x = 6;
// x = 25;
console.log(
  (x > 10 && x <= 20) || x % 3 === 0    // true || false -> true 반환
);

// 💡 드 모르간의 법칙
let a1 = true;
// a = false;
let b1 = true;
// b = false;
console.log(
  '드 모르간의 법칙',
  !(a1 && b1) === (!a1 || !b1),    // false === false
  !(a1 || b1) === (!a1 && !b1)     // true === true
); // 💡 항상 true

let error = true;
// error = false;
// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn('오류 발생!');
// 앞의 것이 false일 때만 뒤의 코드 실행
error || console.log('이상 없음.');

let x1 = true;
// x = false;
// ⭐️ &&, || 연산자는 값 자체를 반환
let y1 = x1 && 'abc';
let z1 = x1 || 123;   // true 반환
console.log(y1, z1);
console.log();

// 삼항 연산자
let x2 = true;
// x = false;
let y2 = x2 ? '참입니다.' : '거짓입니다.';
console.log(y2);

let num = 103247;
console.log(
  'num은 3의 배수' +
  (num % 3 === 0 ? '입니다.' : '가 아닙니다.')
);

let error2 = true;
//error = false;
error2
  ? console.error('오류 발생!')   // true일 때
  : console.log('이상 없음');     // false일 때
console.log();

// Truthy vs Falsy: true of false로 평가되는 값들
console.log(    // true: 0을 제외한 모든 수, (NaN, ''을 제외한)모든 문자열, 빈 객체, 조건 연산자
  1.23 ? true : false,
  -999 ? true: false,
  '0' ? true : false,
  ' ' ? true : false,
  Infinity ? true : false,
  -Infinity ? true : false,
  {} ? true : false,
  [] ? true : false,
);

// ⚠️ true와 `같다`는 의미는 아님
console.log(    // false
  1.23 == true,
  ' ' == true,
  {} == true
);

console.log(    // false: 0, '', null, undefined, NaN
  0 ? true : false,
  -0 ? true : false,
  '' ? true : false,
  null ? true : false,
  undefined ? true : false,
  NaN ? true : false,
);

// 💡 어떤 값들은 false로 타입변환됨
console.log(
  0 == false,   // true
  0 === false,  // false
  '' == false,  // true
  '' === false  // false
);
console.log(
  null == false,      // false
  undefined == false, // false
  NaN == false,       // false
);