// String 객체: 문자열을 감싸는 wrapper객체
// 1. 생성자 함수
const strObj1 = new String();
const strObj2 = new String('Hello World!');

console.log(strObj1);
console.log(strObj2);
// valueOf 또는 toString 메서드로 문자열의 원시값을 반환  
console.log(strObj1.valueOf(), strObj1.toString()); 
console.log(strObj2.valueOf(), strObj2.toString());
// 콘솔에서 펼쳐서 프로퍼티들을 확인해 볼 것. [[PrimitiveValue]] 비교해 볼 것

const fromNum = new String(123); // 생성자 함수는 숫자나 boolean을 문자열로 바꿔줌
const fromBool = new String(true);
const fromArr = new String([1, 'A', false]); // 배열
const fromObj = new String({a: 1}); // Object 객체. 객체를 String하는 것은 의미 없음. 무조건 [Object Object]가 나오니까

console.log(typeof fromNum, fromNum, '1');
console.log(typeof fromBool, fromBool);
console.log(typeof fromArr, fromArr);
console.log(typeof fromObj, fromObj);

console.log(fromNum.toString()); // toString으로 문자열을 출력함
console.log(fromBool.toString());
console.log(fromArr.toString());
console.log(fromObj.toString(), '\n');
// 다른 타입들도 감쌀 수 있음 - 문자열로 변환한 값을 가진 String 객체 반환

// 더 짧은 코드. new 없이 사용하면 바로 문자열로 바꿀 수 있음
// ⭐ 생성자로서가 아닌 String 함수는 주어진 인자를 문자열로 변환하여 반환
const str1 = String('Hello Coding World!');
const str2 = String(456);
const str3 = String(false);
const str4 = String({x: 1, y: 2}); // 💡 [object Object]
const str5 = String([1, 2, 3]); // 💡 1,2,3

console.log(typeof str1, str1);
console.log(typeof str2, str2);
console.log(typeof str3, str3);
console.log(typeof str4, str4);
console.log(typeof str5, str5, '\n');

// 2. 유사 배열 객체: 배열의 기능을 갖고 있는 객체
let myStr = '안녕하세요!';

console.log(
  myStr.length, // 길이
  myStr[0], // 0번 인덱스
  myStr[myStr.length - 1] // 6-1 = 5번 인덱스
);

myStr[myStr.length - 1] = '?'; // 5번 인덱스를 ?로 변환
console.log(myStr); // 💡 배열과 달리 바뀌지 않고 그대로임. String은 배열과 달리 원시값이기 때문
// ⭐️ String은 원시값!
// [] 접근 또는 인스턴스 메서드로 특정 글자만 수정하는 것은 불가능한 이유
// 수정하려면 변수 값 자체를 다른 문자열로 대체해야...

myStr = '안녕하세요?'; // 수정하려면 변수 자체를 바꿔야 함
console.log(myStr);

for (const letter of myStr) { // for ... of문 사용 가능
  console.log(letter);
}
console.log();
// length 프로퍼티: 글자 수 반환
// [] 안에 인덱스 숫자를 넣어 ~번째 글자 읽기(만) 가능
// for ... of문 사용 가능. 이후 배울 이터러블이기 때문


// 3. 주요 인스턴스 메서드
// 1) toUpperCase, toLowerCase: 문자를 모두 대문자/소문자로 변경하여 반환
const word = 'Hello, World.';
console.log(
  word.toUpperCase(),
  word.toLowerCase()
);

console.log(word); // ⭐️ 기존의 문자열은 바꾸지 않음! 다음의 메서드들 모두 마찬가지

// 흔한 활용 예: 특정 단어를 찾을 때, 알파벳에 구애받지 않도록 전부 소문자나 대문자로 변환해서 비교함
function areSameWords (word1, word2) {
  return word1.toLowerCase() === word2.toLowerCase();
}

console.log(
  areSameWords('Hello', 'hello'),
  areSameWords('가나다', '가나다'), // 한글은 대소문자가 있지 않지만 같으므로 상관 없이 True
  areSameWords('ABC', 'DEF') // abd와 def는 같지 않으므로 false
);

// 2) charAt, at: 인자로 주어진 인덱스의 문자 반환
console.log(
  'Hello World!'.charAt(0), // 'H'
  '안녕하세요~'.charAt(2) // '하'
);

// at: 신기능, 배열에서도 사용. 음수로 뒤에서부터 접근 가능 (-1 부터)
console.log(
  '안녕하세요~'.at(2), // '하'
  '안녕하세요~'.at(-2) // '요'
);

// 3) indexOf, lastIndexOf
// 인자로 주어진 문자열이 처음 나타나는 or 마지막으로 나타나는 인덱스 반환. 포함되지 않을 시 -1 반환
const word2 = 'nice to meet!';
console.log (
  word2.indexOf('t'), // 5
  word2.lastIndexOf('m') // 8
);

const word3 = '아니, 하나마나한 걸 왜 하나?';
console.log (
  word3.indexOf('하나'), //4
  word3.lastIndexOf('하나') // 14
);

console.log(
  '가나다라마'.indexOf('다'), // 2
  '가나다라마'.lastIndexOf('하') // -1
);

// 4) includes, startsWith, endsWith
// 인자로 주어진 문자열 포함( 아무곳에 / 맨 앞에 / 맨 끝에 ) 여부 불리언으로 반환
const sentence = '옛날에 호랑이 한 마리가 살았어요.';

for (const word of ['옛날에', '호랑이', '살았어요.', '나무꾼']) { // 배열의 각 요소를 for문으로 반복함
  console.log(
    'includes', word, sentence.includes(word) // 이 문자열이 포함되어 있는가
  );
  console.log(
    'startsWith', word, sentence.startsWith(word) // 이 문자열으로 시작하는가
  );
  console.log(
    'endsWith', word, sentence.endsWith(word) // 이 문자열로 끝나는가
  );
  console.log('- - - - -');
}

// 5) search
// 인자로 받은 정규표현식과 일치하는 첫 부분의 인덱스 반환
// 없을 시 -1 반환
console.log(
  '하루가 7번 지나면 1주일이 되는 거야.'.search(/[0-9]/), // 숫자 7은 4번째 요소 -> 4
  '하루가 일곱 번 지나면 일주일이 되는 거야.'.search(/[0-9]/) // -1
);

const word4 = 'ABCDEFGHIJKL';

// 6) substring
// 인자로 전달받은 인덱스(들)을 기준으로 자른 문자열 반환
const word5 = 'ABCDEFGHIJKL';
const part = word5.substring(4, 8) // 4~7번째 요소. EFGH

console.log(word5, part);

console.log(
  word5.substring(4) // E부터 마지막 까지
);

console.log(
  word5.substring(-1),
  word5.substring(4, 100),
  word5.substring(100)
);
// 인자를 하나만 넣으면 해당 인덱스부터 끝까지
// 음수나 범위 외 숫자는 범위 내 최소/최대 숫자로

const sentence2 = '옛날에 호랑이 한 마리가 살았어요.';

const firstWord = sentence2.substring(
  0, sentence2.indexOf(' ') // sentence2.substring(0, 3) -> 옛날에
);
const lastWord = sentence2.substring(
  sentence2.lastIndexOf(' ') + 1, sentence.length // sentence2.substring(14, 19) -> 14 ~ 18 -> 살았어요
); // 배열의 길이: 19(1부터 시작)

console.log(firstWord, lastWord);

// 7) slice
// substring과 같으나 음수로 뒤에서부터 자를 수 있음. -1부터 시작

const word6 = 'ABCDEFGHIJKL';
console.log(
  word6.substring(4, 8), // EFGH
  word6.slice(4, 8), // EFGH
);

console.log(
  word6.substring(-4), // 공백. 음수로 자를 수 x
  word6.slice(-4) // IJKL
);

const sentence3 = '옛날에 호랑이 한 마리가 살았어요.';

const firstWord2 = sentence3.slice(
  0, sentence3.indexOf(' ') // 0, 3
);

const lastWord2 = sentence3.slice(
  sentence3.lastIndexOf(' ') + 1 - sentence3.length // 14 - 19 = -5 -> 살았어요.
);

console.log(firstWord2, lastWord2);

// 8) split
// 인수로 주어진 문자열이나 정규표현식으로 분리하여 배열을 반환

console.log(
  '010-1234-5678'.split('-'),
  'ABC1DEF2GHI3JKL'.split(/[0-9]/) // 숫자가 나올 때마다 분리
)

// 인자로 빈 문자열을 넣거나 인자 생략시
const word7 = '안녕하세요';

console.log(
  word7.split(''), // 각 인자마다 분리
  word7.split() // 분리x
)

const word8 = '하나 하면 할머니가 지팡이 짚고서 잘잘잘';

console.log(
  word8.split(' ', 2),
  word8.split(' ', 4)
)
// 두 번째 인자로 배열의 최대 길이 지정 가능

const sentence4 = '옛날에 호랑이 한 마리가 살았어요.';
const splitted = sentence.split(' ');

const firstWord3 = splitted[0];
const lastWord3 = splitted[splitted.length - 1];

console.log(firstWord3, lastWord3);

// 9) trim, trimStart, trimEnd
// 앞뒤의 공백 제거하여 반환

const word9 = '  Hello World!  ';
console.log(`--${word9}--`);
console.log(`--${word9.trim()}--`);
console.log(`--${word9.trimStart()}--`);
console.log(`--${word9.trimEnd()}--`);
// 중간의 공백은 제거하지 않음

// 10) repeat
// 인자로 주어진 정수만큼 문자열을 반복하여 반환
const word10 = '호이';

console.log(word10.repeat(3));
console.log(word10.repeat(0));
console.log(word10.repeat());
// 인수가 없거나 0이면 빈 문자열 반환, 음수면 오류 발생

// 11) replace, replaceAll
// 첫 번째 인자로 받은 문자열 또는 정규식을 두 번째 인자로 치환한 결과를 반환
console.log(
  '이스탄불은 터키의 수도이다.'.replace('터키', '튀르키예')
);

const word11 = '밥 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!';

console.log(word11.replace('밥', '라면'));

console.log(word11.replace(/밥/g, '라면'));
// replace의 첫 인자가 문자열이면 일치하는 첫 부분만 치환
// 모두 치환하려면 정규식 /.../g 사용

console.log(word11.replaceAll('밥', '라면'));
console.log(word11.replaceAll(/밥/g, '라면'));
// replaceAll은 문자열도 자동으로 /.../g처럼 인식

// ⭐️ 메서드 체이닝 method chaining: 값을 반환하는 인스턴스 메서드를 연속으로 사용
const word12 = ' 모두 Hello! ';
const rpFrom = 'hello';
const rpTo = 'bye';

console.log(
  word12
  .trimStart()                // ' 모두 HELLO! '
  .toLowerCase()              // ' 모두 hello! '
  .replaceAll(rpFrom, rpTo)   // ' 모두 bye! '
  .toUpperCase()              // ' 모두 BYE! '
  .repeat(3)                  // ' 모두 BYE! 모두 BYE! 모두 BYE! '
  .trimEnd()                  // '모두 BYE! 모두 BYE! 모두 BYE!'
);

console.log(word12); // 원본은 그대로