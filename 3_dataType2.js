let job = '학생';
let age = 17;
console.log(job, age);
console.log(typeof age);

// 숫자 값이 들어있던 age에 문자열 값을 넣음
age = '열일곱';
console.log(age);
console.log(typeof age);

// 주어진 문자열을 대문자로 바꾸는 함수
// 다른 자료형에 대한 예외처리 없음
function getUpperCase(str) {    // 문자열 전용 함수
  return str.toUpperCase();
}
console.log(getUpperCase('hello'));

// ⚠️ 오류 발생!
// console.log(getUpperCase(1));

1 + 1
'1' + 1
