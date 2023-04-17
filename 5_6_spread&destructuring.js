// 1. 스프레드 spread: 하나로 뭉쳐 있는 여러 값들의 집합을 펼쳐서(분산하여, spread) 개별적인 값들의 목록으로 만드는 것.

// 1) 기본 문법
const class1 = {
  x: 1, y: 'A', z: true
};

// 2) 특정 객체의 프로퍼티를 포함하는 다른 객체 생성에 유용
const class2 = { ...class1 }; // class1의 요쇼들을 class2에 복사
// const class2 = class1; 와 다름! 이건 같은 주소를 참조하는 참조복사

console.log('class2: ', class2);

const class3 = {
  a: 2, b: 'B', c: true
};
const class4 = {
  d: { x: 10, y: 100 }, e: [1, 2, 3]
};
const class5 = {
  ...class3, z: 0 // class3의 요소들을 복사한 후, z: 0을 추가
}
const class6 = {
  ...class4, ...class5, ...class4.d
}

console.log('class3: ', class3);
console.log('class4: ', class4);
console.log('class5: ', class5);

// 3) 중복되는 프로퍼티는 뒤의 것을 덮어씀
const class7 = { 
  ...{ a: 1, b: 2 },
  ...{ b: 3, c: 4, d: 5 },
  ...{ c: 6, d: 7, e: 8 }
}

console.log('class7: ', class7);

// 4) ⭐️ 복사의 깊이
const class8 = {
  x: 1,         // x: 원시값
  y: { a: 2 },  // y: 참조값
  z: [3, 4]     // z: 참조값
};

const class9 = { ...class8 };
class8.x++;
class8.y.a++;
class8.z[0]++;

console.log(class8);
console.log(class9, '\n');
// 해당 객체 바로 안쪽의 원시값은 복제하지만 참조값은 같은 값을 가리킴
// 원시값만 있는 객체만 값에 의한 복사 -> '얕은 복사'
// 복합적인 객체의 완전한 깊은 복사는 이후 배우게 될 것

// 2. 디스트럭쳐링 destructuring
// 1) 문법
const obj1 = { // 기존 코드
  x: 1, y: 2, z: 3
};

const x = obj1.x;
const y = obj1.y;
const z = obj1.z;

console.log(x, y, z);

const obj2 = { // 디스트럭쳐링으로 간략화
  x2: 4, y2: 5, z2: 6
};

const {x2, y2, z2} = obj2; // const x2 = obj2.x2 ...

console.log(x2, y2, z2);

const obj3 = { // 일부만 가져오는 것도 가능
  x3: 7, y3: 8, z3: 9
};

const {x3, z3} = obj3;

console.log(x3, z3, '\n');

// 2) 활용
// 필요한 프로퍼티 값을 짧은 코드로 변수/상수에 담을 때
const array1 = [1, 2, 3, 4, 5];

const { length } = array1; // const length = array1.length;

console.log(length);

// ⭐️ 함수 인자 값의 가독성을 위해 객체를 사용할 때
function introduce(name, age, job, married) { // 인자가 많은 함수 - ⚠️ 좋지 않음!
  console.log(`제 이름은 ${name}, `
    + `나이는 ${age}세구요. `
    + `직업은 ${job}, `
    + `${married ? '기혼' : '미혼'}입니다.`
  )
}

introduce('김철수', 28, '개발자', false); // 여러 인자, 순서 중요 - 가독성 떨어짐

// 인자를 하나의 객체로 묶어 받음 
function introduce2(person) {
  console.log(`제 이름은 ${person.name}, `
    + `나이는 ${person.age}세구요. `
    + `직업은 ${person.job}, `
    + `${person.married ? '기혼' : '미혼'}입니다.`
  )
}

const person1 = { // 가독성 좋음, 프로퍼티명만 제대로 입력하면 순서 무관
  job: '개발자',
  age: 28,
  married: false,
  name: '김철수',
  blood: 'O' // 추가 인자 무관
};

introduce2(person1);

// 디스트럭쳐링 (적절히 활용)
function introduce3({age, married, job, name}) {
  // 매개변수의 순서 무관
  // 매개변수들을 나타내서 이 프로퍼티들을 갖는 객체를 인자로 받겠다는 의도 드러냄

  console.log(`제 이름은 ${name}, `
    + `나이는 ${age}세구요. `
    + `직업은 ${job}, `
    + `${married ? '기혼' : '미혼'}입니다.`
  )
}

const person2 = {
  job: '개발자',
  age: 28,
  married: false,
  name: '김철수',
  blood: 'O'
};

introduce3(person2);