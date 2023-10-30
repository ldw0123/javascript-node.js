// 쉼표 연산자
let x = 1, y = 2, z = 3;
console.log(x, y, z);

// 마지막으로 실행한 것(z *= y) 반환
console.log(
  (++x, y += x, z *= y)   // x==2, y==4, z==12. 마지막의 할당 연산자(+=,-=...)가 값을 반환
);
console.log();

// ?? - null병합 연산자
// || - 앞에 false값이 있으면 뒤의 값을 반환 및 실행
// ?? - ||와 달리, falsy가 아닌 null 또는 undefined만 대체
let x1;     // undefined
x1 ?? console.warn(x1, 'x에 값이 없습니다.');   // 출력o

x1 = 0;
x1 ?? console.warn(x1, 'x에 값이 없습니다.');   // 출력x

x1 = null;  // null
x1 ?? console.warn(x1, 'x에 값이 없습니다.');   // 출력o

let a = false;
let b = 0;
let c = '';
let d = null;
let e;

console.log(
  a ?? '기본값',  // 출력x
  b ?? '기본값',  // 출력x
  c ?? '기본값',  // 출력x
  d ?? '기본값',  // 출력o
  e ?? '기본값',  // 출력o
);

let baby1 = '홍길동';
let baby2; // 아직 이름을 짓지 못함. undefined

const nameTag1 = baby1 ?? '1번 아기';
const nameTag2 = baby2 ?? '2번 아기';   // 출력o

console.log(nameTag1, nameTag2);

// 병합 할당 연산자들
let x2 = 0;
let y2 = '';
let z2 = null;

x2 ||= 100;   // x는 false이기 때문의 뒤의 100이 반환
y2 &&= '있어야 바뀜'; // y가 true이어야 뒤가 출력
z2 ??= '기본값';

console.log(x2, y2, z2);
console.log();

// 연산자의 우선순위
let x3 = 1;
let y3 = 19 === 3 + 4 * 2 ** ++x3;

console.log(y3);

console.log(
  2 > 3 || 4 % 2 === 0,     // false||0 -> 0   // 0 === 0 -> true
  2 > (3 || 4) % 2 === 0,
  2 > 3 || 4 % (2 === 0)
);