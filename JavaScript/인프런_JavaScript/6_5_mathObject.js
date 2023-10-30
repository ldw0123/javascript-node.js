// Math객체. 수학에 관련된 기능을 가진 빌트인 객체
// 정적 프로퍼티만 작동함. 인스턴스를 만들지 않고 생성자 함수로 작동하지 않음. number타입만 지원함.

// 1. 주요 정적 프로퍼티
// PI - 원주율
console.log(
  Math.PI // 3.141592...
);
// E - 자연로그의 밑
console.log(
  Math.E // 2.718281...
);

// 2. 주요 정적 메서드
// 1) abs - 절대값(0이상) 반환
console.log(
  Math.abs(123), // 123
  Math.abs(-123), // 123
);

// 0 반환
console.log(
  Math.abs(0),
  Math.abs(''),
  Math.abs(null),
  Math.abs([]),
);

// NaN 반환
console.log(
  Math.abs('abc'),
  Math.abs(undefined),
  Math.abs({a: 1}),
  Math.abs([1, 2, 3]),
  Math.abs()
);

const isEqual = (a, b) => { // (0.1 + 0.2, 0.3)
  return Math.abs(a - b) < Number.EPSILON; // abs() 절대값으로 변환
}

console.log(
  isEqual(0.1 + 0.2, 0.3) // true
);

console.log(
  isEqual(0.3, 0.1 + 0.2) // true
);

// 2) ceil 올림, round 반올림, floor 내림, trunc 정수부만
for (const num of [1.4, 1.6, -1.4, -1.6]) {
  console.log(
    num + ' : ', // 1.4
    Math.ceil(num), // 2
    Math.round(num), // 1
    Math.floor(num), // 1
    Math.trunc(num), // 1
  );
}

// NaN 반환
console.log(
  Math.ceil(),
  Math.round(),
  Math.floor(),
  Math.trunc()
);

// 3) pow - ~로 거듭제곱
console.log(
  Math.pow(4, 2), // 4 ** 2
  Math.pow(4, 1), // 4 ** 1
  Math.pow(4, 0), // 4 ** 0
  Math.pow(4, -1) // 4 ** -1
);
// ** 연산자로 더 간결히 표현 가능

// NaN 반환
console.log(
  Math.pow(4) // NaN
);
// 두 숫자 인자 필요

// 4) sqrt - 제곱근
console.log(
  Math.sqrt(25), // 25 ** 0.5
  Math.sqrt(9),
  Math.sqrt(2),
  Math.sqrt(1),
  Math.sqrt(0)
);

// NaN 반환
console.log(
  Math.sqrt(-25),
  Math.sqrt()
);

// 5) max, min - 인자들 중 최대값과 최소값
console.log(
  Math.max(8, 5, 9, 6, 3, 1, 4, 2, 7), // 9
  Math.min(8, 5, 9, 6, 3, 1, 4, 2, 7),  // 1
  '\n'
  );

// 6) random - 0~1 사이의 무작위 값
for (let i = 0; i < 3; i++) {
  console.log(Math.random());
}

// 0 ~ 9 사이의 정수 무작위로 만들기
// Math.floor(): 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
for (let i = 0; i < 3; i++) {
  console.log(
    Math.floor(Math.random() * 10)
  );
}
console.log();

// 1 ~ 45 사이의 정수 무작위로 만들기
for (let i = 0; i < 6; i++) {
  console.log(
    Math.floor((Math.random() * 45) + 1)
  );
}
console.log();
// ⚠️ 안전한 (균일하고 예측불가한) 난수 생성은 아님!
// 보안에 관련된 것이라면 전용 라이브러리 또는 아래 링크의 방식을 쓸 것

// 7) sin, cos, tan, asin, acos, atan
// 사인, 코사인, 탄젠트, 아크사인, 아크코사인, 아크탄젠트
console.log(
  // 1(또는 근사값) 반환
  Math.sin(Math.PI / 2), // 1
  Math.cos(Math.PI * 2), // 1
  Math.tan(Math.PI / 180 * 45) // 0.999...
);

console.log(
  // Math.PI / 2 반환
  Math.asin(1),
  Math.acos(0),
  Math.atan(Infinity)
);
