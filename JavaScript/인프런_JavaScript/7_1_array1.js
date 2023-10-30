// 자바스크립트 배열의 특징과 생성

// 1. 자바스크립트의 배열은 다르다

// 1) 다른 언어들의 배열 (전형적인 배열)
// 한 배열에는 같은 자료형의 데이터만 포함 가능
// 데이터의 메모리 주소가 연속으로 나열됨
// 접근은 빠름, 중간요소의 추가나 제거는 느림

// 2) 자바스크립트의 배열
// ⭐️ 배열의 형태와 동작을 흉내내는 특수 객체
// 한 배열에 다양한 자료형의 데이터가 들어갈 수 있음
// 연속나열이 아님 - 💡 엔진에 따라 요소들의 타입이 동일하면 연속 배열하기도...
// 접근은 상대적으로 느림 (일반 객체보다는 빠름), 중간요소의 추가나 제거는 빠름
// 💡 특정 자료형 전용 배열도 있음 - 더 빠름

// 2. 배열 생성 방법들
// 1) 배열 리터럴
const arr1 = []; // 빈 배열
const arr2 = [1, 2, 3];
const arr3 = [1, , 2, , 3] // 빈 요소(undefined) 표함 배열 생성

console.log(arr1.length, arr1);
console.log(arr2.length, arr2);
console.log(arr3.length, arr3); // 5 [ 1, <1 empty item>, 2, <1 empty item>, 3 ]
// arr3의 프로퍼티들 확인. 빠진 인덱스 있음, 인덱스 수 < length

// 2) 생성자 함수
// 표준 빌트인 객체들 중 하나
const arr4 = new Array();

console.log(arr4); // []
console.log(arr4.length); // 0
// 길이값만 있음

const arr5 = new Array(3);

console.log(arr5); // [ <3 empty items> ]
console.log(arr5.length); // 3

console.log(
  // arr[0], arr[1], arr[2] // 참조 에러 - ReferenceError: arr is not defined
);
// 인자가 숫자 하나면 길이값은 있지만 요소가 없는 배열 생성. 접근시 undefined

const arr6 = new Array(1, 2, 3);
const arr7 = new Array('ABC');
const arr8 = new Array(true);

console.log(arr6); // [ 1, 2, 3 ]
console.log(arr7); // [ 'ABC' ]
console.log(arr8); // [ true ]
// 인자가 숫자가 아니거나 둘 이상이라면 해당 값들로 배열 생성

// 3) 정적 메서드 of - Array.of
// 인자가 하나의 숫자라도 이를 요소로 갖는 배열 생성
const arr9 = Array.of(3); // 빈 배열로 생성하지 않음

const arr10 = Array.of(1, 2, 3);
const arr11 = Array.of('ABC', true, null);

console.log(arr9);  // [ 3 ]
console.log(arr10); // [ 1, 2, 3 ]
console.log(arr11); // [ 'ABC', 'true, null ]

// 4) 정적 메서드 from - Array.from
// 배열, 유사배열객체, 이터러블을 인자로 받아 배열 반환
const arr12 = Array.from([1, 2, 3]); // 배열
const arr13 = Array.from('ABCDE'); // string
const arr14 = Array.from({ // 유사배열객체
  '0': true,
  '1': false,
  '2': null,
  length: 3
});

console.log(arr12); // [ 1, 2, 3 ]
console.log(arr13); // [ 'A', 'B', 'C', 'D', 'E' ]
console.log(arr14); // [ true, false, null ]

// 💡 유사배열객체: length와 인덱싱 프로퍼티를 가진 객체
const arrLike = {
  0: '🍎',
  1: '🍌',
  2: '🥝',
  3: '🍒',
  4: '🫐',
  length: 5
};

// 일반 for문으로 순회 가능
for (let i = 0; i < arrLike.length; i++) {
  console.log(arrLike[i]);
}
console.log();

// for ... of 문은 이터러블에서만 사용 가능
// for (const item of arrLike) { // 유사배열객체는 for ... of 문 사용 불가
  // console.log(item);
// }

// 배열과 문자열은 대표적인 이터러블
for (const item of Array.from(arrLike)) { // 유사배열객체 arrLike를 배열로 반환
  console.log(item);
}
// 이후 배울 Map, Set 등의 이터러블로도 배열 생성 가능

// ⚠️ Array.from은 얕은 복사 - 1단계 깊이만 복사
const arr15 = [1, 2, 3];
const arr16 = Array.from(arr15);
arr16.push(4);

console.log(arr15, arr16); // [ 1, 2, 3 ] [ 1, 2, 3, 4 ]

arr15[0] = 0;

console.log(arr15, arr16); // [ 0, 2, 3 ] [ 1, 2, 3, 4]

const arr17 = [{x: 1}, {x: 2}];
const arr18 = Array.from(arr17);
arr18.push({x: 3});

// 참조타입 요소의 내부값이 바뀔 경우
arr17[0].x = 0;
console.log(arr17, arr18);

// ⭐️ 두 번째 인자: 매핑 함수 - 두 번째 인자로 값을 받아서 출력하는 함수
const arr19 = [1, 2, 3, 4, 5];
const arr20 = Array.from(arr19, x => x + 1);
const arr21 = Array.from(arr19, x => x * x);
const arr22 = Array.from(arr19, x => x % 2 ? '홀' : '짝');

console.log(arr20); // [ 2, 3, 4, 5, 6 ]
console.log(arr21); // [ 1, 4, 9, 16, 25 ]
console.log(arr22); // [ '홀', '짝', '홀', '짝', '홀' ]
// 매핑 mapping : 각 요소가 특정 알고리즘을 거쳐 새 값으로 반환됨
// 곧 배울 인스턴스 메서드 map이 보다 자주 사용됨