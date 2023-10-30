// 배열의 고차함수(higher order function) 메서드
// 다른 함수(콜백 함수 callback function)를 인자로 받음
// 함수형 프로그래밍 - 변수 사용 없이 순회 작업들을 코딩

// 1. forEach - 각 요소를 인자로 콜백함수 실행
// 💡 for문 대신 사용하기에 좋음!
// ⚠️ 단점 : 예외를 던지지 않으면 종료할 수 없음 - break, continue 사용 불가
// break, continue를 사용하려면 for ~ of 반복문을 사용해야 함

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

// 2. map - 각 요소를 주어진 콜백함수로 처리한 새 배열 반환. return 필수
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
  arr9.some(i => i % 2), // true
  arr9.every(i => i % 2), // false
  arr9.some(i => i < 0), // false
  arr9.every(i => i < 10) // true
);

const arr10 = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

const isCheapVege = i => {
  return i.cat === '채소' && i.price < 2000; // 오이
}
const isPlant = ({cat}) => {
  return ['과일', '채소'].includes(cat); // cat 변수의 값이 '과일' 또는 '채소' 중 하나인지 확인하고 그 결과를 반환
}

console.log(
  arr10.some(isCheapVege), // true
  arr10.every(isCheapVege), // false
  arr10.some(isPlant), // true
  arr10.every(isPlant), // true
  '\n'
);

// 5. filter - 주어진 기준을 충족하는 요소들로 새 배열 만들어 반환
// 원본 배열을 수정하지 않음
// 인자 1. 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
// 인자 2. thisArg
const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = arr11.filter(i => i % 2);
const evens = arr11.filter(i => !(i % 2));
const largerThan3 = arr11.filter(i => i > 3);

console.log(odds); // [ 1, 3, 5, 7, 9 ]
console.log(evens); // [ 2, 4, 6, 8 ]
console.log(largerThan3); // [ 4, 5, 6, 7, 8, 9 ]

const arr12 = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

console.log(
  '과일 목록:',
  arr12
  .filter(({cat}) => cat === '과일')
  .map(({name}) => name)
  .join(', '),
  '\n'
);

// 6. reduce, reduceRight
// 주어진 콜백함수에 따라 값들을 접어 나감
// 인자 1: 콜백함수 - 인자: ( 이전 값, 현재 값, 현재 인덱스, 해당 배열 )
// 인자 2: 초기화 값

// 💡 초기화 값이 없을 때는 첫 번째와 두 번째 값부터
const arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  arr13.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr; // 이전 값 + 현재 값 반환
  }) // 45
);

// 초기화 값이 있을 때
console.log(
  arr13.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr;
  }, 10) // 초기값: 10
); // 55
// 인덱스가 0부터 시작함 주목

// 곱해나가기
console.log(
  arr13.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev * curr;
  }) // 362880
);

// 더하기와 빼기 반복
console.log(
  arr13.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return idx % 2 ? prev + curr : prev - curr;
  }) // -3
);

// 홀수와 짝수의 개수
console.log(
  arr13.reduce((prev, curr) => {
    return {
      odd: prev.odd + curr % 2, //홀수이면 curr % 2 가 1이므로 prev.odd + curr % 2의 값이 1 증가. 짝수이면 0이라 아무 일도 일어나지 않음
      even: prev.even + (1 - (curr % 2)), // 짝수이면 prev.even + (1 - (curr % 2))의 값이 1 증가. 홀수이면 0이라 아무 일도 일어나지 않음
    }
  }, { odd: 0, even: 0 })
); // -3 { odd: 5, even: 4 }

// reduce vs reduceRight
const arr14 = ['가', '나', '다', '라', '마', '바', '사'];

console.log(
  arr14.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr;
  })
);

console.log(
  arr14.reduceRight((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr;
  })
);
// reduceRight은 인덱스도 거꾸로 진행됨에 주목

const arr15 = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

['과일', '채소'].forEach(category => {
  console.log(
    `${category}의 가격의 합:`,
    arr15
    .filter(({cat}) => cat === category)
    .map(({price}) => price)
    .reduce((prev, curr) => prev + curr)
  );
});
// ⭐️ 만약 위 기능을 배열 메서드와 체이닝 없이 짰다면? -> 중간 과정을 저장하기 위한 변수 또는 내용이 바뀌는 참조형 데이터들이 사용되었을 것
// 함수형 프로그래밍 - 변수들을 코드에서 감추어 부수효과로 인한 문제 방지
console.log();

// 7. sort - 배열을(주어진 기준대로) 정렬
// ⚠️ 배열 자체의 순서를 바꿈 - 원본 수정
// 해당 배열을 반환

// 인자. 콜백함수(필수 아님) - 인자: ( 앞의 값, 뒤의 값 )

// 1) 인자가 없을 시
const arr16 = ['라', '사', '다', '가', '바', '마', '나'];

arr16.sort(); // 배열 정렬

console.log(arr16); // ['가', '나','다', '라','마', '바','사']

let randomWord = 'DBKGICAHFEJ';

console.log( // ABCDEFGHIJK
  randomWord
  .split('')
  .sort()
  // .reverse()
  .join('')
);

console.log(randomWord); // DBKGICAHFEJ

// ⚠️ 숫자일 시 문제가 생김
const arr17 = [1, 2, 30, 400, 10, 100, 1000];
console.log(arr17.sort(), '\n'); // [ 1, 10, 100, 1000,  2,  30, 400 ]
// 숫자를 문자열로 암묵적 변환하여 오름차순 정렬

// ⭐️ 정확한 정렬을 위해 - 콜백 함수 사용
// 두 인자 a와 b : 인접한 두 요소
// 0보다 큰 값 반환 : b를 앞으로 - 순서 뒤집음
// 0 반환: 순서 유지 - ECMAScript 표준은 아니므로 환경마다 다를 수 있음
// 0보다 작은 값 반환 : a를 앞으로 - 사실상 순서 유지

// 8. flatMap - map 한 다음 flat 매핑해서 펼침
// 인자 1. 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
// 인자 2. thisArg
const arr18 = [1, 2, 3, 4, 5];

console.log(
  arr18.flatMap(i => i) // [ 1, 2, 3, 4, 5 ]
);

console.log(
  arr18.flatMap(i => [i, i, i]) // [ 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5 ]
);

console.log(
  arr18.flatMap(i => [i * 10, i * 100, i * 1000]) // [ 10, 100, 1000, 20, 200, 2000, ... ]
);

// 💡 한 단계만 펼침
console.log(
  arr18.flatMap(i => [i, [i], [[i]]])
)

const word = '하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열';

console.log(
  word
  .split(' ')
  .flatMap(i => i.split(''))
);
