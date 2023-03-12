// 상수 객체
const person1 = {
  name: '김철수',   
  age: 25,          // 원래는 "age"처럼 따옴표를 붙여야 하지만, 자바스크립트는 안 붙여도 됨
  married: false
};

console.log(typeof person1);  // 객체는 object 타입
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

console.log("배열 winners의 타입: " + typeof winners);    // object 타입. JS의 배열은 기본적으로 객체
console.log("winners: " + winners + "\n" + "weekdays: " + weekdays + "\n" + "randoms: " + randoms);
console.log(winners, weekdays, randoms);

// 값과 길이 접근
// 특정 순서의 값에 접근하는 법 (0부터 시작)
console.log(winners[0], weekdays[6], randoms[3]);
// 배열의 길이(요소의 갯수)를 얻는 법
console.log(winners.length, weekdays.length, randoms.length);
// 마지막 요소 얻기
console.log(winners[winners.length - 1]);   // console.log(winners[3]);

// 수정 및 추가. const임에도 그 값은 수정할 수 있음
const numbers = [1, 2, 3];

// 특정 위치의 값 수정
numbers[2] = 5;
console.log(numbers);

// 맨 끝에 값 추가
numbers.push(10);
console.log(numbers);

// 배열의 범주 너머로 접근시 undefined 반환
const winners2 = [12, 592, 7, 48];
console.log(winners2[winners2.length]);

// 중첩 사용 가능
const person2 = {
  name: '김달순',
  age: 23,
  languages: ['Korean', 'English', 'French'],
  education: {
    school: '한국대',
    major: ['컴퓨터공학', '전자공학'],
    graduated: true,
  }
};

console.log(person2.languages[2]);    // French
console.log(person2.education.graduated);   // true

const groups = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];

const weapons = [
  { name: '롱소드', damage: 30, design: ['화룡검', '뇌신검'] },
  { name: '활', damage: 12 },
  { name: '워해머', damage: 48 },
];

console.log(groups[1][2]);    // 5
console.log(weapons[2].damage);   // 48
console.log(weapons[0].design[0]);    // 화룡검