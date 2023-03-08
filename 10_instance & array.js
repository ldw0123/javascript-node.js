// 상수 객체
const person1 = {
  name: '김철수',   
  age: 25,          // 원래는 "age"처럼 따옴표를 붙여야 하지만, 자바스크립트는 안 붙여도 됨
  married: false
};

console.log(typeof person1);  // object 타입
console.log(person1);

// 프로퍼티 접근
console.log(  // 속성값에 접근하는 방법1
  person1.name,
  person1.age,
  person1.married
);

console.log(  // 속성값에 접근하는 방법2
  person1['name'], // 속성명을 string으로. 문자열이기 때문에 '' 필요
  person1['age'],
  person1['married'],
);

// 존재하지 않는 키로 접근 시 undefined 반환
console.log(person1.birthdate);
console.log(person1['job']);

// 키 in 객체 - 특정 키 포함 여부 확인
console.log(
  'person1 객체 안에 age가 포함 되어 있는가?',
  'age' in person1, 
)
console.log(
  'person1 객체 안에 age가 포함 되어 있는가?',
  'job' in person1
);

// 특정 프로퍼티의 값 변경
// const로 선언된 상수 객체는 수정될 수 있음
person1.age = 26;
person1['married'] = true

console.log(person1);

// 새 프로퍼티 추가
person1.job = 'developer';
person1['bloodtype'] = 'AB'

console.log(person1);
console.log();


// 배열
const winners = [12, 592, 7, 48];
const weekdays = ['월', '화', '수', '목', '금', '토', '일'];


const randoms = ['홍길동', -24, true, null, undefined]; // 자료형에 관계없이 한 배열에 넣을 수 있음

console.log(typeof winners);    // object 타입
console.log(winners, weekdays, randoms);

