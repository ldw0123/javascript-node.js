// 생성자 함수의 필요성: 같은 형식의 객체들을 다수 만들어야 한다면?

const chain1 = { // 체인점을 나타내는 객체들
  name: '판교',
  no: 3,
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};

const chain2 = {
  name: '강남',
  no: 17,
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};

const chain3 = {
  name: '제주',
  no: 24,
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};

console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce(), '\n')

// 1. 생성자 함수로 객체 만들기
function Chicken (name, no) { // 생성자 함수
  this.name = name; // 객체의 프로퍼티들을 사용하려면 this를 사용해야 함
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

const chain4 = new Chicken('판교', 3); // new 연산자로 인스턴스 생성
const chain5 = new Chicken('강남', 17);
const chain6 = new Chicken('제주', 24);

console.log(chain4, chain4.introduce());
console.log(chain5, chain5.introduce());
console.log(chain6, chain6.introduce());

// 생성자 함수명은 일반적으로 대문자로 시작 - 파스칼 케이스
// 생성자 함수로 만들어진 객체를 인스턴스 instance 라 부름
// this.~로 생성될 인스턴스의 프로퍼티들 정의
// 생성자 함수는 new 연산자와 함께 사용
// 암묵적으로 this 반환
// 생성자 함수에서는 메서드 정의 불가 - 객체 리터럴과 클래스에서는 가능

// ⚠️ new를 붙이지 않으면 undefined 반환
function Chicken2 (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

console.log(Chicken2('동대문', 51));


function createChicken (name, no) {
  return {
    name, no,
    introduce () {
      return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
    }
  }
}

// 💡 "객체를 반환하는 함수랑은 뭐가 다르지??"
const chain7 = createChicken('종로', 6);
const chain8 = createChicken('합정', 4);
const chain9 = createChicken('홍대', 1);

console.log(chain7, chain7.introduce());
console.log(chain8, chain8.introduce());
console.log(chain9, chain9.introduce(), '\n');

// 2. 생성자 함수로 만들어진 객체

// 1) 프로토타입 prototype - 자바스크립트 객체지향의 중심
function Chicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

const chain10 = new Chicken('신사', 8);
console.log(chain10);

// 프로토타입: 본사에서 배포하는 메뉴얼이라고 이해. 이후 프로토타입 섹션에서 자세히 배우게 될 것
// 타 언어의 클래스와는 다르며 사용하기에 따라 더 강력함
// ⚠️ 사실 introduce와 introEng은 종류가 다름 (인스턴스 vs 프로토타입)
Chicken.prototype.introEng = function () {
  return `Welcome to DW Chicken at ${this.name}!`; // 본사에서 새 업무를 추가
};

console.log(chain10.introEng());
console.log(new Chicken('신림', 14).introEng());


// 2) 💡 타 방식으로 만든 객체와의 차이
function Chicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

function createChicken (name, no) {
  return {
    name, no,
    introduce () {
      return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
    }
  }
}

// 객체 리터럴
const chain11 = {
  name: '판교', no: 3,
  introduce: function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};

const chain12 = createChicken('서면', 32); // 객체 반환 함수

const chain13 = new Chicken('대전', 25); // 생성자 함수

console.log(chain11, chain11 instanceof Chicken); // instanceof : 객체가 특정 생성자 함수에 의해 만들어졌는지 여부 반환
console.log(chain12, chain12 instanceof Chicken);
console.log(chain13, chain13 instanceof Chicken); // true. 생성자 함수에 의해 만들어짐
// 객체 자체의 로그도 상세가 다름. 유의 앞에 생성자 함수명이 붙음
// 프로토타입의 constructor의 체인이 해당 생성자 함수 포함하는지 여부


// 3) 생성자 함수 자체의 프로퍼티와 함수
function Chicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

Chicken.brand = 'DW치킨'; // 인스턴스를 생성하지 않고도 가능
Chicken.contact = function () {
  return `${this.brand}입니다. 무엇을 도와드릴까요?`;
};

const chain14 = new Chicken('원주', 30);

console.log(Chicken.contact());
// console.log(chain14.contact());


// 4) 💡 new 생략 실수 방지하기
function Chicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }

  if (!new.target) { // 이 부분을 지우고 다시 해 볼 것
    return new Chicken(name, no); // new를 붙임. 재귀함수
  }
}

const chain15 = new Chicken('인천', 33);
const chain16 = Chicken('용인', 11); // new를 생략한 실수를 가정함

console.log(chain15, chain16);
// 해당 함수가 new 연산자 없이 호출되었을 경우 재귀호출을 통해 생성해 내보냄
// 다음 강에 배울 클래스에서는 new 없이는 오류가 발생하므로 필요 없음
