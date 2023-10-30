// 1. 접근자 프로퍼티 - 객체가 가진 프로퍼티 값을 객체 밖에서 읽거나 쓸 수 있도록 제공하는 메서드
// getter, setter 함수라고도 부름
// 스스로는 값을 갖지 않음. get, set을 앞에 붙임
const person1 = {
  age: 17, // 만 나이

// getter 함수: 반드시 값을 반환해야 함. 특정 프로퍼티를 원하는 방식으로 가공하여 내보낼 때 사용
// getter 함수는 특정 값을 조회하려고 할 때 특정 코드를 실행시키고 연산된 값을 받아서 사용한다. getter 함수는 파라미터 값을 가질 수 없다
  get koreanAge () { 
    return this.age + 1;
  },

// setter 함수: 특정 값이 변경되어 질 때마다 함수를 실행하는 데 사용. 특정 프로퍼티에 값이 저장되는 방식을 조작하거나 제한하는데 사용
// setter 함수는 한개의 매개변수를 가져야 한다.
  set koreanAge (krAge) { 
    this.age = krAge - 1;
  }
}

console.log(person1, person1.koreanAge);

person1.koreanAge = 20; // setter의 매개변수: 20

console.log(person1, person1.koreanAge); // 💡 함수처럼 지정되었지만 프로퍼티처럼 사용!

// ⭐️ 클래스에서도 사용 가능
class Chicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  get chainTitle() { // getter
    return `${this.no}호 ${this.name}점`;
  }
  set chainNo(chainNo) { // setter
    if (typeof chainNo !== 'number') return;
    if (chainNo <= 0) return;
    this.no = chainNo;
  }
}

const chain1 = new Chicken('판교', 3);
console.log(chain1.chainTitle);

chain1.chainNo = '5';
console.log(chain1);

chain1.chainNo = -1;
console.log(chain1);

chain1.chainNo = 4;
console.log(chain1, '\n');

// 2. 은닉
// 캡슐화 encapsulation: 객체지향의 주요 요소 중 하나. 객체 내부의 값을 감추는(은닉) 것
// 인스턴스의 프로퍼티 값을 외부에서 함부로 열람하거나 수정하지 못하도록 함.
// 자바스크립트의 필드는 기본적으로 public. 은닉되지 않음

// 🧪 private 필드를 통한 은닉: 필드명 앞에 #을 붙임. 클래스 바로 안쪽에 정의해야 함 (constructor에만 하면 안 됨)
class Employee {
  #name = '';
  #age = 0;
  constructor (name, age) {
    this.#name = name;
    this.#age = age;
  }
}

const emp1 = new Employee('김복동', 32);

console.log(emp1);

// console.log(emp1.#name); // ⚠️ 오류 발생 (일부 브라우저 제외)

console.log(emp1['#name']); // ⚠️ undefined 반환

// 클래스 내부에서는 private 필드에 접근 가능
class Employee2 {
  #name = '';
  #age = 0;
  constructor (name, age) {
    this.#name = name;
    this.#age = age;
  }
  get name () {
    return this.#name[0] + '모씨'; // [n]: n + 1 번째 글자를 반환
  }
  get age () {
    return this.#age - (this.#age % 10) + '대';
  }
  set age (age) {
    if (typeof age === 'number' && age > 0) {
      this.#age = age;
    };
  }
  getOlder(years) { this.#age += years; }
}

const emp2 = new Employee2('김복동', 22);
// constructor, 접근자 프로퍼티 또는 기타 함수에서 접근 가능
// 인스턴스에서 바로 접근은 못하도록 은닉, 위 방법들로 제어

console.log(emp2.name, emp2.age)

emp2.age = 0;
console.log(emp2.age);

emp2.age = 35;
console.log(emp2.age);

emp2.getOlder(20);
console.log(emp2.age);