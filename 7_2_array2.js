// 배열의 기본 메서드들
// 1. 특정 값을 반환하는 기본 메서드들
// 1) (정적) isArray - 배열인지 여부를 반환
console.log(
  Array.isArray([1, 2, 3]), // 배열. true
  Array.isArray('123'), // 배열x. false
  Array.isArray('123'.split('')), // 문자열에 split을 쓰면 배열이 나옴. true
  '\n'
);

// 💡 instanceof Array와의 차이
// instanceof: 객체가 특정 클래스에 속하는지 아닌지를 확인하는데 사용하는 연산자. 상속 관계도 확인해 줌. 맞으면 true 아니면 false를 반환
const arrays = [ // 배열인 것들
  [], [1, 2, 3], new Array(),
  // ⚠️ instanceof에서는 결과가 다름
  Array.prototype // Array.prototype: 배열의 프로토타입 객체이며, 이 객체는 배열의 모든 인스턴스가 상속하는 메서드와 속성을 포함함. 빈 배열 객체임
];

const notArrays = [ // 배열이 아닌 것들
  1, 'abc', true, null, {}
];

for (const item of arrays) {
  console.log(
    item, // array의 요소를 item의 이름으로 반환 -> [], [ 1, 2, 3], [], object(0) []
    Array.isArray(item), // item이 배열인지 확인 -> true, true, true, true
    item instanceof Array, // item이 배열인지 확인 -> true, true, true, false
  );
}
console.log('\n');
// Object(0)은 Array.prototype을 콘솔에 출력할 때 나타나는 값. 즉, Object(0)은 빈 배열 객체를 나타냄

for (const item of notArrays) {
  console.log(
    item, // 1, abc, true, null, {}
    Array.isArray(item),
    item instanceof Array
  );
}
console.log('\n');
// Array.isArray가 보다 권장됨. 다른 프레임의 Array도 판별

// 2) at - 주어진 인자를 인덱스로 값을 반환
// ⭐️ 음수를 사용하여 뒤에서부터 접근 가능. -1부터
const arr = [
  '한놈', '두시기', '석삼', '너구리', '오징어'
];

console.log(
  arr.at(1), arr.at(2) // 두시기 석삼
);

console.log(
  arr.at(-1), arr.at(-2) // 오징어 너구리
);

// 3) includes - 인자로 주어진 요소 유무 확인
const arr2 = [1, 2, 3, 'abc', true];

console.log(
  arr2.includes(2), // true
  arr2.includes('abc'), // true
  arr2.includes(true), // true
);

console.log(
  arr2.includes(4), // false
  arr2.includes('가나다'), // false
  arr2.includes(false) // false
);

// ⚠️ 참조형 데이터의 경우
const obj1 = { x: 1, y: 2 };
const obj2 = { x: 1, y: 2 };

const arr3 = [
  obj1,
  { x: 3, y: 4 }
];

console.log(
  arr3.includes(obj1), // true
  arr3.includes(obj2), // false. obj1과 obj2는 주소가 다르니까
  arr3.includes({ x: 1, y: 2 }), // false
  arr3.includes({ x: 3, y: 4 }) // false
);

// 4) indexOf, lastIndexOf - 앞/뒤에서 첫 번째 값의 인덱스 반환
// 없을 시 -1 반환
const arr4 = [1, 2, 3, 2, 1];

console.log(
  arr4.indexOf(2), // 1
  arr4.lastIndexOf(2), // 3
  arr4.indexOf(4) // -1
);

// 5) join - 인자로 주어진 값으로 구분하여 요소들을 문자열로 연결하여 반환
const arr5 = ['a', 'b', 'c', 'd', 'e'];
const arr6 = [
  1, true, null, undefined, '가나다', { x: 0 }, [1, 2, 3]
];

console.log(
  arr5.join() // 인자가 없다면 쉼표`,`로. a,b,c,d,e
);

console.log(
  arr5.join('') // 공백을 넣으면 붙임. abcde
);

console.log(
  arr5.join(' ') // a b c d e
);

console.log(
  arr6.join(':') // 1:true:::가나다:[object Object]:1,2,3
);

console.log(
  classIntro(3, '김민지', '영희', '철수', '보라')
); // 호이스팅

function classIntro (classNo, teacher, ...children) {

  // [ 4-3강 예제 ]
  // let childrenStr = '';
  // for (const child of children) {
  //   if (childrenStr) childrenStr += ', ';
  //   childrenStr += child;
  // }
  // return `${classNo}반의 선생님은 ${teacher}, `
  //   + `학생들은 ${childrenStr}입니다.`

  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${children.join(', ')}입니다.`
}
console.log('\n');

// 2. 원본 배열을 변경하는 기본 메서드들

// 1) push, unshift - 배열에 값을 추가
// 결과의 길이를 반환

// a. push - 값을 뒤에 추가
const arr7 = [1, 2, 3];
const x = arr7.push(4);

console.log(x, arr7); // 4 [ 1, 2, 3, 4 ]

const y = arr7.push(5, 6, 7); // 최종 길이 반환

console.log(y, arr7);

// b. unshift - 값을 앞에 추가
const arr8 = [5, 6, 7];
const x2 = arr8.unshift(4);

console.log(x2, arr8); // 4 [ 4, 5, 6, 7 ]

const y2 = arr8.unshift(1, 2, 3);

console.log(y2, arr8); // 7 [ 1, 2, 3, 4, 5, 6, 7 ]
// < 특징과 비교 >
// 수정된 배열의 길이를 반환
// 부수효과 - 원본 배열을 변경. 배열 마지막 강에 배울 스프레드 문법을 보다 권장
// 💡 push보다 unshift가 더 느림 - 이후 요소들을 밀어내야 하므로

// 2) pop, shift - 배열에서 값을 제거하여 반환
// a. pop - 값을 뒤에서 제거하여 반환
const arr9 = [1, 2, 3, 4, 5];
const x3 = arr9.pop(); // 맨 뒤 값인 5 제거

console.log(x3, arr9); // 5 [ 1, 2, 3, 4 ]

const y3 = arr9.pop(); // 맨 뒤 값인 4 제거

console.log(y3, arr9); // 4 [ 1, 2, 3 ]

// b. shift - 값을 앞에서 제거하여 반환
const arr10 = [1, 2, 3, 4, 5];
const x4 = arr10.shift();

console.log(x4, arr10); // 1 [ 2, 3, 4, 5 ]

const y4 = arr10.shift();

console.log(y4, arr10); // 2 [ 3, 4, 5 ]
// 💡 pop보다 shift가 더 느림 - 이후 요소들을 당겨야 하므로

// 3) splice - 원하는 위치에 요소를 추가 및 삭제
// 2개 이상의 인자를 받음
// start : 배열 변경을 시작할 위치
// deleteCount : 제거할 요소의 개수
// item(s) : 추가할 하나 이상의 요소
const arr11 = [1, 2, 3, 4, 5, 6, 7];

// 2번 인덱스부터 2개 요소 제거
arr11.splice(2, 2);

console.log(arr11); // [ 1, 2, 5, 6, 7 ]

// 3번 인덱스부터 요소 제거 없이 'a' 추가
arr11.splice(3, 0, 'a');

console.log(arr11); // [ 1, 2, 5, 'a', 6, 7 ]

// 1번 인덱스부터 3개 요소 제거 후 '가', '나', '다' 추가
arr11.splice(1, 3, '가', '나', '다');

console.log(arr11); // [1, '가', '나', '다', 6, 7]

// ⚠️ 배열의 delete - empty 값을 남김
const arr12 = [1, 2, 3, 4, 5];
delete arr12[2];

console.log(arr12); // [ 1, 2, <1 empty item>, 4, 5 ]

// 💡 때문에 배열의 값 삭제에는 splice 사용
arr12.splice(2, 1);

console.log(arr12); // [ 1, 2, 4, 5 ]

// 4) fill - 배열을 특정 값으로 채움
// 중간의 빈 값도 채움
const arr13 = [1, 2, , , 4, 5];
arr13.fill(7);

console.log('1.', arr13); // 1. [ 7, 7, 7, 7, 7, 7 ]

// 💡 특정 값으로 채운 배열 생성시 유용
const arr14 = new Array(10);
arr14.fill(1);

console.log('2.', arr14); // 2. [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]

// 인자가 둘일 때: (채울 값, ~부터)
arr14.fill(2, 3); // 2를 인덱스 3부터 채움

console.log('3.', arr14); // 3. [ 1, 1, 1, 2, 2, 2, 2, 2, 2, 2 ]

// 인자가 셋일 때: (채울 값, ~부터, ~ 전까지)
arr14.fill(3, 6, 9); // 3을 6부터 8까지 채움

console.log('4.', arr14); // 4. [ 1, 1, 1, 2, 2, 2, 3, 3, 3, 2 ]

// 5) reverse - 배열의 순서를 뒤집음
const arr15 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr15); // [ 1, 2, 3, 4, 5, 6, 7 ]

// 💡 메서드 자체도 뒤집힌 배열을 반환
arrRev = arr15.reverse();

// 원본 배열 뒤집힘
console.log(arr15);  // [ 7, 6, 5, 4, 3, 2, 1 ]
console.log(arrRev); // [ 7, 6, 5, 4, 3, 2, 1 ]

arrRev[0] = 0;

// ⭐ 반환된 배열은 원본과 같은 배열을 참조! (복사가 아님. 원본 배열을 바꿈)
console.log(arr15, arrRev); // [ 0, 6, 5, 4, 3, 2, 1 ] [ 0, 6, 5, 4, 3, 2, 1 ]
console.log('\n');

// 3. 새 배열을 반환하는 기본 메서드들
// ⭐️ 원본 배열을 수정하지 않음
// 얕은 복사본

// 1) concat - 배열에 다른 배열이나 값을 이어붙인 결과를 반환
const arr16 = [1, 2, 3];
const arr17 = ['a', 'b', 'c'];
const arr18 = [true, false];
const arr19 = arr16.concat(arr17);
const arr20 = arr16.concat(arr17, 3);
const arr21 = arr16.concat('ABC', arr17, arr18, 100);

console.log(arr19); // [ 1, 2, 3, 'a', 'b', 'c' ]
console.log(arr20); // [ 1, 2, 3, 'a', 'b', 'c', 3 ]
console.log(arr21); // [ 1, 2, 3, 'ABC', 'a', 'b', 'c', true, false, 100 ]

// ⭐️ 원본 배열들에는 변화 없음
// 해당 배열 뒤로 인자로 하나 이상 주어진 다른 배열이나 값을 이어붙인 결과를 반환
console.log(arr16, arr17, arr18); // [ 1, 2, 3 ] [ 'a', 'b', 'c' ] [ true, false ]


// 2) slice - 인자로 주어진 범주의 값을 잘라 반환
// 1~2개 인자를 받음
// begin : 시작 위치
// end : 종료 위치
const arr22 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr23 = arr22.slice(3);
const arr24 = arr22.slice(3, 7); // 3 ~ 6

console.log(arr23, arr24); // [ 4, 5, 6, 7, 8, 9] [ 4, 5, 6, 7 ]

// 원본에는 변화 없음
console.log(arr22, '\n'); // 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 3) flat - 인자로 주어진 깊이만큼 배열을 펼쳐 반환
// 💡 flat 평평하게 한다는 의미
[
  1,
  [2, 3],
  [4, 5, 6],
  7
]
// ↓ ↓ ↓
[
  1,
  2,
  3,
  4,
  5,
  6,
  7
]

const orgArr = [
  1, 2, [3, 4], [5, [6, [7, 8]]]];

// 인자가 없으면 1을 넣은 것과 같음. flat(1)은 한 단계만 푼다는 뜻
const arr0 = orgArr.flat();
const arr1 = orgArr.flat(1);

const arr25 = orgArr.flat(2);
const arr26 = orgArr.flat(3);

console.log('N:', arr0); // N: [ 1, 2, 3, 4, 5, [ 6, [ 7, 8 ] ] ]
console.log('1:', arr1); // 1: [ 1, 2, 3, 4, 5, [ 6, [ 7, 8 ] ] ]
console.log('2:', arr25); // 2: [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]
console.log('3:', arr26); // 3: [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// 원본에는 변화 없음
console.log('org:', orgArr); // org: [ 1, 2, [ 3, 4 ], [ 5, [ 6, [Array] ] ] ]

// 💡 위의 메서드들은 얕은 복사
const orgArr1 = [
  1, { x: 2 }, [{ x: 3 }, {x: 4}], 5
];

const arr27 = orgArr1.concat(6);
const arr28 = orgArr1.slice(0, 3);
const arr29 = orgArr1.flat();

orgArr1[0] = 0;
orgArr1[1].x = 20;
orgArr1[2][0].x = 30;

console.log(orgArr1);
console.log(arr27);
console.log(arr28);
console.log(arr29);