// 배열함수

let names = [
  "Steve Paul Jobs",
  "Bill Gates",
  'Larry Ellison',
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Larry Page"
];

// forEach
// 인자. 콜백함수 - 인자: (현재 값, 현재 값의 인덱스, 해당 배열)

// 일반적인 for문
console.log("for문");
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.log();

// forEach: 인자로 함수를 받음
// 일반 함수를 정의해서 사용한 방법
console.log("일반 함수");
function printName1(item) {
  console.log(item);
}

names.forEach(printName1);
console.log();

// 화살표함수를 사용한 방법
console.log("화살표 함수");
const printName2 = names.forEach((item) => {
  console.log(item);
});

console.log(printName2);
console.log();

// 익명함수를 사용한 방법(함수의 이름이 없음)
console.log("익명 함수");
names.forEach(function (item) {
  console.log(item);
});
console.log();

names.forEach((item, index) => {
  console.log(item, index);
}); // 화살표함수 + 익명함수
console.log();

// map: 배열을 반환. return 필수
// 인자. 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
let ceoList = [
  { name: "Larry Page", age: 23, ceo: true },
  { name: "Tim Cook", age: 40, ceo: true },
  { name: "Elon Musk", age: 55, ceo: false },
];

let data = names.map((item) => {
  return item;
});

console.log(data);
console.log();

let data1 = ceoList.map((item) => { // ceoList에서
  return item.name // name만 반환
});

console.log(data1);
console.log();

// filter 조건에 맞는 요소를 가져와서 새 배열로 만듦. 배열에서 필터링함. 원본 배열을 수정하지 않음
// 인자. 콜백함수 - 인자: ( 현재 값, 현재 값의 인덱스, 해당 배열 )
let data2 = ceoList.filter((item) => { // ceoList에서
  return item.age==23 // age가 23인 요소 반환
});

console.log(data2);

let data3 = names.filter((item) => { // names에서
  return item.startsWith("L") // L로 시작하는 요소 반환
});

console.log(data3);

// for문을 사용하면 코드 한가득
let data4 = []
for (let i = 0; i < names.length; i++) { 
  if (names[i].startsWith("L"))
  data4.push(names[i]) // push: 배열의 맨 뒤 요소에 값을 추가
}
console.log(data4);
console.log();

// some 요소들 중 하나라도 true를 반환하는가 여부 반환
let data5 = names.some((item) => { // names에서
  return item.startsWith("L") // L로 시작하는 요소 있으면 true 반환
});

console.log("some:", data5); // true

// every 요소들 중 모두 true를 반환하는가 여부 반환
let data6 = names.every((item) => { // names에서
  return item.startsWith("L") // 모두 L로 시작하는가?
});

console.log("every:", data6); // false

let data7 = names.every((item) => { // names에서
  return item.length > 0 // 모두 길이가 0보다 크느냐?
});

console.log("every:", data7); // true

// find, findLast, findIndex, findLastIndex 요소 검색
let data8 = names.find((item) => { // names에서
  return item == "Larry Ellison" // Larry Ellison 검색
});

console.log("find:", data8); 

let data9 = names.findIndex((item) => { // names에서
  return item == "Larry Ellison" // Larry Ellison 인덱스 번호를 검색
});

console.log("find:", data9); // find: 2 -> Larry Ellison의 인덱스 번호는 2

