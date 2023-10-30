// 배열의 스프레드와 디스트럭쳐링
// 1. 스프레드 spread: 배열이나 객체를 펼쳐 요소들을 나열함. 주로 배열이나 객체의 복사본을 만들 때 사용함. 짧은 코드로 복사가 가능하기 때문에 실무에서 자주 사용
// 1) 기본 문법
// ... -> 스프레드 연산자
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]

const arr3 = ['B', 'C'];
const arr4 = ['D'];
const arr5 = ['E'];

const arr6 = ['A', ...arr3, ...arr4, ...arr5, 'F']

console.log(arr6); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

// 2) 활용
// a. 배열을 다수의 인자들로 펼침
const arr7 = [1, 2, 3, 4, 5];

console.log(arr7); // [1, 2, 3, 4, 5]

// console.log(1, 2, 3, 4, 5);
console.log(...arr7); // 1 2 3 4 5

console.log(
  Math.max(...arr7), // 5
  Math.min(...arr7)  // 1
);

function classIntro (classNo, teacher, ...children) {
  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${children.join(', ')}입니다.`
}

const classNo = 3;
const teacher = '김민지';
const students = ['영희', '철수', '보라', '돌준', '달숙'];

console.log(
  classIntro(classNo, teacher, ...students) // 3반의 선생님은 김민지, 학생들은 영희, 철수, 보라, 돌준, 달숙입니다.
);

const arr8 = [1, 2, 3, 4, 5, 6, 7];
const toAdd = ['둘', '셋', '넷'];

// splice: 원하는 위치에 요소를 추가 및 삭제
arr8.splice(1, 3, ...toAdd); // 1번 부터 3번 인덱스까지 삭제하고 toAdd배열을 추가

console.log(arr8); // 1, '둘', '셋', '넷', 5, 6, 7

// b. concat보다 가독성있는 배열 결합
// concat: 배열에 다른 배열이나 값을 이어붙인 결과를 반환
const arr9 = [1, 2, 3];
const arr10 = [4, 5, 6];

const arr11 = arr9.concat(arr10);
const arr12 = [...arr9, ...arr10]; // 보다 가독성 있음

console.log(arr11, arr12); // [ 1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ]

// c. ⭐️ 배열의 얕은 복사
const arr13 = [1, 2, 3];
const arr14 = [...arr13];

console.log(arr13 === arr14);

arr13[0] = 0;

console.log(arr13, arr14); // [0, 2, 3] [1, 2, 3]

// ⚠️ 깊은 복사는 되지 않음
const arr15 = [{ x: 1 }, { x: 2 }];
const arr16 = [...arr15];

arr15[0].x = 0;
console.log(arr15, arr16); // [ { x: 0 }, { x: 2 } ] [ { x: 0 }, { x: 2 } ]

// d. 💡 push, unshift 대신 사용
// push, unshift: 배열에 값을 추가
let arr17 = [1, 2, 3];

arr17 = [...arr17, 4]; // push와 같은 효과
console.log(arr17); // [ 1, 2, 3, 4 ]

arr17 = [0, ...arr17]; // unshift와 같은 효과
console.log(arr17); // [ 0, 1, 2, 3, 4 ]
//가독성 향상
// 배열이 든 변수의 참조값이 변할 필요가 있는 경우 (SPA 등...)

// e. 원본배열을 유지한 채 일정부분만 연결하여 복사
// splice는 원본배열을 변경
const orgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 💡 slice는 원본을 변경하지 않음
// slice: 인자로 주어진 범주의 값을 잘라 반환
const arr18 = [
  ...orgArr.slice(0, 3), // 0 ~ 2번 인덱스
  ...orgArr.slice(6, 9) // 6 ~ 8
];
console.log(arr18); // [1, 2, 3, 7, 8, 9]

// 참고: 또 다른 방법
const arr19 = orgArr.filter((_, i) => !(i >= 3 && i < 6));
// 콜백 함수를 호출하고, 콜백 함수가 true를 반환하는 원소들로만 구성된 새로운 배열을 생성
// 콜백 함수의 첫 번째 매개변수는 사용되지 않기 때문에 _로 표시. 인덱스 i만을 사용하여 필터링 조건을 검사
console.log(arr19); // [ 1, 2, 3, 7, 8, 9 ]

// 원본은 유지
console.log(orgArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// 2. 디스트럭쳐링 destructuring
