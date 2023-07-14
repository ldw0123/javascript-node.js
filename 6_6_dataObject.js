// Date 객체
// 날짜와 시간 관련 기능들을 제공하는 빌트인 객체

// 1. 생성자 함수
// 1) 현재 날짜와 시간
const now = new Date();
console.log(typeof now); // object
console.log(now);

const nowStr = Date()
console.log(typeof nowStr); // string
console.log(nowStr);
// new와 함께 사용하면 인스턴스 객체
// 없이 사용하면 문자열 반환 - new Date().toString()과 같음

// 2) 밀리초 기준
// 1970년 1월 1일 자정(UTC, 그리니치 평균시)으로부터 인자로 주어진 밀리초만큼 경과한 시간
console.log(
  new Date(0)
);
console.log(
  new Date(1000 * 60 * 60 * 24 * 365 * 30)
);

// 3) 단위별 숫자 입력
// 연, 월 ( 0부터 시작 ) 필수
// 일, 시, 분, 초, 밀리초 옵션 없을 시 0
console.log(
  new Date(2022, 8)
);

console.log(
  new Date(2022, 8, 20, 14, 35)
);

console.log(
  new Date(2022, 8, 20, 14, 35, 47, 789)
);

// 4) dateString
// 특정 형식의 문자열 인식 가능
// ⚠️ 동작이 일관적이지 못함, 브라우저마다 차이 존재 - 권장하지 않음
console.log(
  new Date('August 20, 2022 14:35:47')
);

console.log(
  new Date('2022-08-20T14:35:47'), '\n'
);

// 2. 정적 메서드
// 1) now
// 현재의 밀리초 숫자값 (앞으로 UTC 1970/1/1 자정부터 경과값 의미) 반환
console.log(Date.now());

// 2) parse, UTC
// 주어진 시간의 밀리초 숫자값 반환
// parse는 인자로 dateString, UTC는 단위별 숫자를 받음
console.log(
  Date.parse('August 20, 2022 00:00:00 UTC')
);

console.log(
  // 💡 시스템(실행 컴퓨터) 시간이 한국이면 시차 9시간 적용
  Date.parse('August 20, 2022 09:00:00')
);

console.log(
  // ⭐️ 월은 0부터 시작
  Date.UTC(2022, 7, 20, 0, 0, 0)
);

// 3. 인스턴스 메서드
// 1) toString, toDateString, toTimeString
// 각각 전체, 날짜만, 시간만 나타내는 문자열 출력
// 시스템(컴퓨터)의 언어 설정별로 다르게 나타남
const now2 = new Date();

console.log(
  now2.toString() // 날짜 + 시간
);

console.log(
  now.toDateString() // 날짜만
);

console.log(
  now.toTimeString(), '\n' // 시간만
);

// 2) toLocaleString
// 주어진 언어 코드를 기준으로 표현한 문자열 반환
// 인자가 없을 시 시스템의 언어 적용
const now3 = new Date();

console.log(
  now3.toString()
);

console.log(
  now.toLocaleString()
);

console.log(
  now.toLocaleString('ko-KR')
);

console.log(
  now.toLocaleString('en-US')
);

console.log(
  now.toLocaleString('de-DE'), '\n'
);

// 3) 단위별 setter, getter 메서드들
const now4 = new Date();
console.log(now4.toString());

for (i of [
  [ '연:', now.getFullYear() ],
  [ '월:', now.getMonth() ], // 0 ~ 11
  [ '일:', now.getDate() ],
  [ '요일:', now.getDay() ], // 0부터 일월화수목금토 
  [ '시:', now.getHours() ],
  [ '분:', now.getMinutes() ],
  [ '초:', now.getSeconds() ],
  [ '밀리초:', now.getMilliseconds() ]
]) {
  console.log(i[0], i[1]);
}

const now5 = new Date();
console.log(now5.toString());

now.setFullYear(2022);
now.setMonth(7);
now.setDate(20);
// 💡 요일은 setter가 없음
now.setHours(14);
now.setMinutes(35);
now.setSeconds(47);
now.setMilliseconds(789);

console.log(now.toString(), '\n');

// ⭐️ 활용 예
const now6 = new Date();
const year = now6.getFullYear();
const month = now6.getMonth() + 1;
const date = now6.getDate();
const day = '일월화수목금토'[now6.getDay()];

console.log(
  `오늘은 ${year}년 ${month}월 ${date}일, ${day}요일입니다.`, '\n'
);

// 4) getTime, setTime
// 밀리초 숫자값을 set/get
const date1 = new Date(2020, 7, 20); // 7 -> 0부터 시작하므로 8월
const date1value = date1.getTime();

console.log(date1.toString()); 
console.log(date1value); // 밀리초 값

const date2 = new Date();

console.log(date2.toString());

date2.setTime(date1value);

console.log(date2.toString());

// 5) etTimezoneOffset
// 시스템의 시간대와 UTC의 시간차를 분 단위로 반환
// 한국의 경우 9시간 차이
console.log(
  new Date().getTimezoneOffset() / 60 // -9
);

// 6) toISOString
// ISO 8061이란 형식의 문자열 반환
// UTC 기준으로 반환
const now7 = new Date();

// 시간차 존재
console.log(
  now7.toISOString()
);
console.log(
  now7.toString()
);

// ⭐️ 현재시각으로 맞추기
const now8 = new Date();
const timezoneOffset = now8.getTimezoneOffset() * 60000;

const isoStr = new Date(now8.getTime() - timezoneOffset).toISOString();

console.log(isoStr);
console.log(now8.toString());