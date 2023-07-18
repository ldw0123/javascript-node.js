// 배열의 기본 메서드들
// 1. 특정 값을 반환하는 기본 메서드들
// 1) (정적) isArray - 배열인지 여부를 반환
console.log(
  Array.isArray([1, 2, 3]), // 배열. true
  Array.isArray('123'), // 배열x. false
  Array.isArray('123'.split('')), // true
  '\n'
);

// 💡 instanceof Array와의 차이
// instanceof: 객체가 특정 클래스에 속하는지 아닌지를 확인하는데 사용하는 연산자. 상속 관계도 확인해 줌. 맞으면 true 아니면 false를 반환
const arrays = [
  [], [1, 2, 3], new Array(),
  // ⚠️ instanceof에서는 결과가 다름
  Array.prototype // Array.prototype: 배열의 프로토타입 객체이며, 이 객체는 배열의 모든 인스턴스가 상속하는 메서드와 속성을 포함함. 빈 배열 객체임
];

const notArrays = [
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
  arr3.includes(obj2), // true
  arr3.includes({ x: 1, y: 2 }), // false ? 
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
  arr5.join('') // abcde
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

