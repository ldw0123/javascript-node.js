// 1. 전역 객체 global object: 코드로 선언하거나 하지 않아도 전역 범위에 항상 존재하는 객체. 전역 객체를 사용하면 어디서나 사용 가능한 변수나 함수를 만들 수 있음.
// 브라우저 환경에서는 'window', node.js 환경에서는 'global', 양 쪽 통합된 환경에서는 'globalThis'
console.log(globalThis, '\n'); //⭐️ globalThis 통일된 식별자 - 양쪽 모두에서 실행해 볼 것

// 💡 전역 객체에 포함되는 것
// 1) 표준 빌트인 객체
// 2) 호스트 객체 - 환경에서 제공하는 기타 객체들 : 브라우저의 Web API, Node.js API 등
// 3) (브라우저 한정) - 전역으로 설정된 var 변수와 전역 함수
var myGlobalVar = 1; // var는 사용x
const myGlobalConst = 1;

function myGlobalFunc () {};

console.log(
  globalThis.myGlobalVar, // 변수가 globalThis 전역객체의 요소로 들어옴
  globalThis.myGlobalConst,
  globalThis.myGlobalFunc, '\n'
);

// 2. 표준 빌트인 객체 standard built-in objects: 어떤 환경에서든 사용 가능. 
// 전역 프로퍼티로 제공됨 - globalThis등을 붙이지 않고 바로 사용 가능. globalThis 생략 가능
console.log(globalThis); // 💡 Node.js에서는 globalThis 출력시 표준 빌트인 객체들은 출력하지 않음

console.log("globalThis.Infinity: " + globalThis.Infinity); // 그러나 요소들로 갖고 있는 것은 확인 가능
console.log("globalThis.Infinity: " + Infinity); // globalThis 생략가능
console.log("globalThis.isNaN: " + globalThis.isNaN);
console.log("globalThis.isNaN: " + isNaN);
console.log("globalThis.Object: " + globalThis.Object);
console.log("globalThis.Object: " + Object, '\n');

// 3. 래퍼 객체 wrapper object: boolean, number, string...
// 숫자, 문자, 불린같은 원시값은 메서드를 붙이면 잠깐동안 임시 객체가 될 수 있음
const str = 'abcde';
console.log( // 원시값이 갖고 있는 프로퍼티들을 출력
  str.length, // String객체에서 제공하는 length 프로퍼티. string 원시 타입 -> String 객체로 변환
  str.toUpperCase(), // String객체에서 제공하는 toUpperCase() 메서드
  str[0]
);

const num = 123.4567;
console.log(
  typeof num.toString(), // 123.4567이라는 숫자를 문자열로 변환. 
  num.toFixed(2) // 특정 자릿수로 반올림하는 함수
);

// 💡 콘솔에서 프로퍼티와 프로토타입을 펼쳐 확인해보자.
const str2 = new String('abcde');
const num2 = new Number(123.4567);
const bool2 = new Boolean(true);

console.log(typeof str2, str2);
console.log(typeof num2, num2);
console.log(typeof bool2, bool2);
// Number, String, Boolean 등은 표준 빌트인 객체에 속하는 "래퍼 객체"
// 원시값을 필요 시 래퍼 객체로 감싸서 wrap 그것의 인스턴스로 만들어 기능 실행
// 원시값에서 객체를 사용하듯 해당 래퍼 객체의 프로퍼티를 호출할 때 래핑이 발생

// ⭐️ 해당 기능 사용 후에는 원시 객체로 돌아감 - 메모리 절약
const str3 = 'abcde';
console.log(str3.length);
console.log(typeof str3, str3);

// valueOf 함수 - 래퍼 객체의 인스턴스에서 원시값 반환
const str4 = new String('abcde');
const num4 = new Number(123.4567);
const bool4 = new Boolean(true);

console.log(str4.valueOf());
console.log(num4.valueOf());
console.log(bool4.valueOf());