// 스코프 scope(유효범위): 블록 안에 선언된 변수와 상수를 밖에서 사용 불가
// 단, var로 설정된 변수는 중괄호 밖에서도 사용 가능
{
  const x = 'Hello';
  let y = 'world!';
  console.log(x, y);
}
// console.log(x); // 사용 불가
// console.log(y); // 사용 불가

// 블록 안에서는 바깥의 것을 사용 가능
let x2 = 1;

{
  let y2 = 2;
  console.log(x2, y2);
}
// console.log(x); // 사용 불가
// console.log(y); // 사용 불가

// 블록 안에 변수나 상수가 새로 선언되면 바깥 것을 덮어씀
const xx = 0;
let yy = 'Hello!';
console.log(xx, yy);

{
  const xx = 1; // 💡 블록 안에서는 바깥의 const 재선언 가능
  let yy = '안녕하세요~'; // ⚠️ const, let을 빼먹으면 재선언이 아니라 바깥의 변수값을 바꿈!

  console.log(xx, yy);
}

console.log(xx, yy);
console.log();

// 스코프 체인 scope chain
// stack: 후입선출 LIFO
let a = 0;
let b = 1;
let c = 2;
console.log('시점 1:', a, b, c);

{
  let a = 'A';
  let b = 'B'
  console.log('시점 2:', a, b, c);

  {
    let a = '가'
    console.log('시점 3:', a, b, c);
  }

  console.log('시점 4:', a, b, c);
}

console.log('시점 5:', a, b, c);