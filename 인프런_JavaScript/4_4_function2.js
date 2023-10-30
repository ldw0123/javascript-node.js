// 1. 중첩된 함수
function outer () {
  const name = '바깥쪽'
  console.log(name, '함수');

  function inner () {
    const name = '안쪽'
    console.log(name, '함수');
  }
  inner();
}

outer();

function addMulSub (x, y) {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;

  return sub(mul(add(x, y), y), y);
}

console.log(addMulSub(8, 3));
console.log();


// 2. 재귀 함수 recursive function
function upto5 (x) {
  console.log(x);
  if (x < 5) {
    upto5(x + 1); // 재귀 호출
  } else {
    console.log('- - -');
  };
}

upto5(1);
upto5(3);
upto5(7);
console.log();

// 팩토리얼 재귀함수
function fact(x) {
  return x === 0 ? 1 : x * fact(x - 1); // 재귀 호출
}

console.log(
  "1!=" + fact(1),
  "2!=" + fact(2),
  "3!=" + fact(3),
  "4!=" + fact(4),
  "5!=" + fact(5),
  "6!=" + fact(6),
  "7!=" + fact(7),
  "\n"
);

// 3. 즉시 실행 함수 IIFE - 오늘날에는 잘 사용되지 않음. 과거의 코드 분석을 위해...
(function () {
  console.log('IIFE');
})();

// 딱 한 번만 사용될 함수에 전역 변수들을 사용하지 않고, 복잡한 기능을 일회성으로 실행할 때
// 다른 코드들과의 변수명이나 상수명 충돌을 막기 위함 (특히 많은 코드들이 사용될 때)
const initialMessage = (function () { // 즉시 실행 함수
  var month = 8; // ⚠️ var를 사용함에 주목
  var day = 15;
  var temps = [28, 27, 27, 30, 32, 32, 30, 28];
  var avgTemp = 0;
  for (const temp of temps) {
    avgTemp += temp
  }
  avgTemp /= temps.length;

  return `${month}월 ${day}일 평균기온은 섭씨 ${avgTemp}도입니다.`; 
})();

console.log(initialMessage);
// console.log(month); // month를 외부에서 사용하면 에러
console.log();

// 요즘에는 블록과 이후 배울 모듈의 사용으로 대체
// 요즘에는 var 대신 let과 const를 사용
// 이전의 var는 블록 외에서 사용될 수 있었음! 그렇기 때문에 IIFE를 사용했음
let initialMessage2;

{
  const month = 8;
  const day = 15;
  const temps = [28, 27, 27, 30, 32, 32, 30, 28];
  let avgTemp = 0;
  for (const temp of temps) {
    avgTemp += temp
  }
  avgTemp /= temps.length;

  initialMessage2 = `${month}월 ${day}일 평균기온은 섭씨 ${avgTemp}도입니다.`;
};

console.log(initialMessage2);
// console.log(month); // 새로고침 후 const를 var로 바꾸고 실행해볼 것 (var는 블록 밖에서 사용될 수 있음)
console.log();


// 4. ⭐️ 불변성 immutability
let x = 1;
let y = {
  name: '홍길동',
  age: 15
}
let z = [1, 2, 3];

function changeValue (a, b, c) {
  a++;
  b.name = '전우치';
  b.age++;
  c[0]++;

  console.log(a, b, c);
}

changeValue(x, y, z); // 참조 타입

console.log(x, y, z); // 원시 타입
