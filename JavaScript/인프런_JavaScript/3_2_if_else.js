// if문
const open = true;

if (open) console.log('영업중입니다.'); // 한 줄 코드

if (open) { // 여러 줄 코드 - 블록문 사용
  console.log('환영합니다.');
  console.log('즐거운 쇼핑하세요!\n');
}

// if ~else문
const x = 20;

if (x % 2) {  // 나머지: 0 -> false
  console.log('홀수입니다.'); // true일 때
} else {
  console.log('짝수입니다.'); // false일 떄
}

const x2 = 22; // 중첩 사용

if (x2 % 4) {
  if (x2 % 2) {
    console.log('홀수입니다.');
  } else {
    console.log('짝수입니다.');
  }
} else {
  console.log('4의 배수입니다.');
}

// if ~else if~문
const x3 = 21;

if (x3 % 2) {
  console.log('홀수입니다.');
} else if (x3 % 4) {
  console.log('짝수입니다.');
} else {
  console.log('4의 배수입니다.');
}
console.log();

// 함수 사용(권장)
function evalNum () {
  const x4 = 21;

  if (x4 % 2) {
    console.log('홀수입니다.');
    return;
  }

  if (x4 % 4) {
    console.log('짝수입니다.');
    return;
  }

  console.log('4의 배수입니다.');
}

evalNum();
console.log('블록문 바깥');
