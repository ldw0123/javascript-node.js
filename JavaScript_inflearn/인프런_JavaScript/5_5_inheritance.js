// 💡 상속 inheritance: 서로 다른 클래스나 생성자 함수가 같은 속성들을 공유할 때 이들의 관계를 정의함으로써 코드의 중복을 줄이고 효율을 높임

// 1. 클래스의 상속 문법: 자식클래스 extends 부모클래스
class Bird {
  wings = 2;
}
class Eagle extends Bird { // 자식 클래스(Eagle)는 조상 클래스(Bird)를 상속받는다
  claws = 2;
  swim () { console.log('독수리는 수영을 못 해...'); }
}
class Penguin extends Bird {
  swim () { console.log('펭귄은 수영중...'); }
}
class EmperorPenguin extends Penguin {
  size = 'XXXL';
}

const birdy = new Bird();
const eaglee = new Eagle();
const pengu = new Penguin();
const pengdol = new EmperorPenguin();

console.log(birdy, eaglee, pengu, pengdol);

for (const i of [
  [ '1.', birdy instanceof Bird ], // instanceof: birdy가 Bird의 인스턴스인지 확인함
  [ '2.', eaglee instanceof Bird ],
  [ '3.', eaglee instanceof Eagle ],
  [ '4.', pengdol instanceof Penguin ],
  [ '5.', pengdol instanceof Bird ],
  [ '6.', birdy instanceof Eagle ]
]) {
  console.log(i[0], i[1]);
}

pengu.swim();
pengdol.swim();
eaglee.swim();
// 자식 클래스의 인스턴스는 부모 클래스의 인스턴스로 인식됨
// 최고 조상 클래스는 Object

class Chicken {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`
  }
}

class ChickenAndCafe extends Chicken {
  cafeMenu = { '아메리카노': 4000, '라떼': 4500 };
  cafeOrder (name) {
    return `${this.cafeMenu[name]}원입니다.`
  }
}

const chain1 = new ChickenAndCafe('서면', 2)

console.log(chain1);

console.log(
  chain1.order('후라이드'),
  chain1.cafeOrder('라떼'), '\n'
);

// 2. 오버라이딩 overriding: 자식 클래스에서 부모로부터 물려받은 속성이나 기능을 덮어 씀
class Bird2 {
  wings = 2;
  canFly = true;
  travel () { console.log('비행중...') }
}
class Eagle2 extends Bird2 {
  claws = 2;
  travel () { console.log('저 멀리 비행중...') }
}
class Penguin2 extends Bird2 {
  canFly = false; // Overriding
  travel () { console.log('수영중...') }
}

const eaglee2 = new Eagle2();
const pengu2 = new Penguin2();

console.log(eaglee2);
eaglee2.travel();

console.log(pengu2);
pengu2.travel();
console.log();

// 3. super: 부모 클래스의 생성자 또는 메서드 호출
// super는 다른 클래스에서 상속받은 클래스에서만 사용 가능
// 자식 클래스의 constructor(생성자) 내에서는 부모 클래스의 constructor를 가리킴
// 자식 클래스의 메서드 내에서는 부모 클래스를 가리킴
// 부모 클래스의 constructor나 메서드에 추가적인 동작을 넣기 위해 사용
class Chicken2 {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`
  }
}

class ConceptChicken extends Chicken2 {
  #word = '';
  constructor (name, no, word) {
    super(name, no); // 부모 클래스의 생성자(constructor) 호출
    this.#word = word;
  }
  introWithConcept () {
    return super.introduce() + ' ' + this.#word;
  }
  order (name) {
    return super.order(name) + ' ' + this.#word;
  }
}

const pikaChain = new ConceptChicken('도봉', 50, '피카피카~');

console.log(pikaChain);

console.log(pikaChain.introWithConcept());

console.log(pikaChain.order('후라이드'));
