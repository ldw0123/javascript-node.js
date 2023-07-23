// 배열의 고차함수(higher order function) 메서드
// 다른 함수(콜백 함수 callback function)를 인자로 받음
// 함수형 프로그래밍 - 변수 사용 없이 순회 작업들을 코딩

// 1. forEach - 각 요소를 인자로 콜백함수 실행
// 💡 for문의 좋은 대체제
// ⚠️ 단점 : 예외를 던지지 않으면 종료할 수 없음 - break, continue 사용 불가

// 인자 1. 콜백함수 - 인자: (현재 값, 현재 값의 인덱스, 해당 배열)
// 인자 2. thisArg - this 주제 섹션에서 다룰 것

const arr = [1, 2, 3, 4, 5];

const result = arr.forEach(itm => {
  console.log(itm); // 1, 2, 3, 4, 5
});
// 💡 반환값으로 undefined 반환 - 실행 자체를 위한 메서드
console.log('반환값:', result); // 반환값: undefined

// 현존하는 함수를 인자로 - 💡 결과 살펴볼 것
arr.forEach(console.log);

const arr1 = [10, 20, 30, 40, 50];

// 콜백함수의 인자가 둘일 때
arr1.forEach((itm, idx) => {
  console.log(itm, idx);
});

const logWithIndex = (itm, idx) => {
  console.log(`[${idx}]: ${itm}`);
}

arr1.forEach(logWithIndex);

// 콜백함수의 인자가 셋일 때
arr.forEach((itm, idx, arr) => {
  // 💡 세 번째 인자는 원본 배열의 참조임
  arr[idx]++;
  console.log(itm);
});

// 이런 식으로 원본을 수정해버릴 수 있음
console.log(arr, '\n');

// 2. map - 각 요소를 주어진 콜백함수로 처리한 새 배열 반환
// 인자 1. 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
// 인자 2. thisArg
const orgArr = [1, 2, 3, 4, 5];

// ⭐️ 각 콜백함수는 어떤 값을 반환해야 함
const arr2 = orgArr.map(i => i + 1);
const arr3 = orgArr.map(i => i * i);
const arr4 = orgArr.map(i => i % 2 ? '홀수' : '짝수');

console.log(arr2); // [ 2, 3, 4, 5, 6 ]
console.log(arr3); // [ 1, 4, 9, 16, 25 ]
console.log(arr4); // [ '홀수', '짝수', '홀수', '짝수', '홀수' ]

const orgArr2 = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 2500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

const arr5 = orgArr2.map(itm => {
  // 💡 블록 안에서는 return 문 필요함
  return {
    name: itm.name,
    cat: itm.cat
  }
});

console.log(arr5);

// 디스트럭쳐링 사용 (편의에 따라 적절히)
const arr6 = orgArr2.map(({name, cat}) => {
  return { name, cat }
});

console.log(arr6);

const joined = orgArr2
.map(({name, cat, price}, idx) => {
  return `${idx + 1}: [${cat[0]}] ${name}: ${price}원`
})
.join('\n - - - - - - - - - \n');

console.log(joined, '\n');

// 3. find, findLast, findIndex, findLastIndex - 주어진 기준으로 검색
// 콜백함수로에 인자로 넣었을 때 true를 반환하는
// find - 첫 번째 값 반환
// findLast - 마지막 값 반환
// findIndex - 첫 번째 값의 인덱스 반환
// findLastIndex - 마지막 값의 반환

// 공통 인자 1. 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
// 공통 인자 2. thisArg
const arr7 = [1, 2, '삼', 4, 5, 6, '칠', 8, 9];

const isString = i => typeof i === 'string'; // isString함수는 i의 타입이 string인지 확인하고 반환함
const isBoolean = i => typeof i === 'boolean';

console.log(
  arr7.find(isString), // 삼
  arr7.findLast(isString), // 칠
  arr7.findIndex(isString), // 2
  arr7.findLastIndex(isString) // 6
);

// 없을 시 값은 undefined, 인덱스는 -1 반환
console.log(
  arr7.find(isBoolean), // undefined
  arr7.findLast(isBoolean), // undefined
  arr7.findIndex(isBoolean), // -1
  arr7.findLastIndex(isBoolean) // -1
);

const arr8 = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

const isCheapFruit = i => {
  return i.cat === '과일' && i.price < 3000; // 과일이면서 3000원 미만의 가격인 것
}

console.log(
  arr8.find(({cat}) => cat === '채소').name, // 오이
  arr8.findLast(isCheapFruit).name, // 살구
  '\n'
  );

// 4. some, every - 어떤/모든 요소가 기준을 충족하는지 확인
// 콜백함수에 인자로 넣은
// some - 요소들 중 하나라도 true를 반환하는가 여부 반환
// every - 모든 요소가 true를 반환하는가 여부 반환

// 인자 1. 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
// 인자 2. thisArg

const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  arr9.some(i => i % 2),
  arr9.every(i => i % 2),
  arr9.some(i => i < 0),
  arr9.every(i => i < 10)
);