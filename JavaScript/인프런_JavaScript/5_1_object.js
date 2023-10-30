// 1. 객체 생성과 프로퍼티 접근
const food1 = { // food1 객체 생성
  name: '햄버거',
  price: 5000,
  vegan: false
};

console.log(food1); // food1 객체 출력

console.log(
  food1.name, // 마침표. - 프로퍼티 접근 연산자
  food1['price'] // 대괄호[] - 프로퍼티 접근 연산자
);


// 빈 객체 생성
const food2 = {};
console.log(food2);

// 프로터피 추가
food2.name = '샐러드';
food2.price = '6000';
food2['vegan'] = true;

console.log(food2);

// 프로터피 수정
food2['price'] = '6500';
food2.vegan = false;

console.log(food2);


// 식별자 명명 규칙에 벗어나는 키 이름 사용시
// 변수명 등으로 사용할 수 없는 이름의 키인 경우 (상수/변수명으로 사용할 수 없는 '숫자, -, 공백'이 있을 경우)
// 따옴표로 감싸면 오류가 나지 않음
const obj = {
  1: '하나', // 숫자도 객체의 키로는 사용 가능
  'ab-cd': 'ABCD', // 문자 포함 시 키도 따옴표로 감싸야 함
  's p a c e': 'Space'
}

// 대괄호 프로퍼티 접근 연산자로만 가능
console.log(
  obj[1],
  obj['ab-cd'],
  obj['s p a c e']
);

// ⚠️ 마침표 연산자로 접근 시 오류 발생
// console.log(
//   obj.1,
//   obj.ab-cd,
//   obj.s p a c e
// );

// 표현식으로 키값 정의하기. 대괄호[] 사용
let idx = 0;
const  obj2 = {
  ['key-' + ++idx]: `value-${idx}`, // key-1: 'value-1
  ['key-' + ++idx]: `value-${idx}`, // key-2: 'value-2
  ['key-' + ++idx]: `value-${idx}`, // key-3: 'value-3
  [idx ** idx]: 'POWER' // 3^3 = 27: 'POWER'
}

console.log(obj2);

// 객체나 배열을 키값으로 사용 시
const objKey = { x: 1, y: 2 }; // 객체
const arrKey = [1, 2, 3]; // 배열

const obj3 = {
  [objKey]: '객체를 키값으로',
  [arrKey]: '배열을 키값으로'
}

console.log(
  obj3[objKey], // 객체를 키값으로
  obj3[arrKey]  // 배열을 키값으로
);

// ⚠️ ???
console.log(
  obj3[{ a: 1, b: 2, c: 3 }], // 내용이 다른 객체
  obj3['1,2,3'] // 문자열
);

// 로그를 펼쳐 키값을 볼 것 - 💡 문자열임
// 객체와 배열이 그 자체가 아니라 문자열로 치환되어 키가 되는 것
console.log(obj3);

console.log(
  obj3['[object Object]'] // 객체를 문자열로 단순 치환한 값
  , '\n'
);
// 즉, 실제로 해당 객체나 배열의 내용이나 참조값이 키가 되는 것이 아님 -> 객체나 배열을 키값으로 쓰면 안 됨
// 이후 배울 Map (참조값을 키값으로 사용)과의 차이점

// 2. 🗑 프로퍼티 삭제 - delete 연산자
const person1 = {
  name: '홍길동',
  age: 24,
  school: '한국대',
  major: '컴퓨터공학'
};

console.log(person1);

delete person1.age; // age 요소 삭제
console.log(person1);

delete person1['major']; // major 요소 삭제
console.log(person1);

// 💡 오류가 발생하지는 않음
delete person1.hobby;
console.log(person1, '\n');

// 3. 키의 동적 사용
const product1 = {
  name: '노트북',
  color: 'gray',
  price: 800000
}

function addModifyProperty (obj, key, value) {
  // obj.key = value; // ⚠️ 의도와 다른 작업 수행. 매개변수로 받은 데이터가 아닌, "key"라는 이름의 키의 값으로 접근되기 때문
  obj[key] = value; // product1[inch] = 16;
}
function deleteProperty (obj, key) {
  // delete obj.key // ⚠️ 의도와 다른 작업 수행
  delete obj[key]; // product1[color] 객체 삭제
}

addModifyProperty (product1, 'inch', 16); // inch 요소 추가
console.log(product1);

addModifyProperty (product1, 'price', 750000); // price 요소 수정
console.log(product1);

deleteProperty(product1, 'color');
console.log(product1, '\n');

// 4. ES6 추가 문법

// 1) 객체 선언 시 프로퍼티 키와 대입할 상수/변수명이 동일할 시 단축 표현
const x = 1, y = 2;

const obj4 = { 
  x: x,
  y: y
}

console.log(obj4);


const obj5 = { x, y }

console.log(obj5);


function createProduct (name, price, quantity) {
  return { name, price, quantity };
}

const product2 = createProduct('선풍기', 50000, 50);
const product3 = createProduct('청소기', 125000, 32);

console.log(product2, product3);

// 2) 메서드 method - 객체에 프로퍼티의 값으로 들어간 함수
// 일반 함수 프로퍼티 정의
const person = {
  name: '홍길동',

  salutate: function (formal) { // salutate라는 키의 프로퍼티로 함수가 들어가 있음
    return formal
    ? `안녕하십니까, ${this.name}입니다.`
    : `안녕하세요, ${this.name}이에요.`;
  }
}
console.log(person.salutate(true));

// ⭐️ 메서드 정의
const person2 = {
  name: '홍길동',
  
  salutate (formal) { // 객체에 바로 사용할 함수 이름을 적음
    return formal
    ? `안녕하십니까, ${this.name}입니다.`
    : `안녕하세요, ${this.name}이에요.`;
  }
}
console.log(person2.salutate(true));
// ⭐ ES6부터는 아래쪽 표현으로 정의된 함수만 메서드라고 부름
// 일반 함수 프로퍼티와 특성이 다름 - 이후 자세히 배울 것