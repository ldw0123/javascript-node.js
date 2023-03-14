// switch문
const fingersOut = 0; // 가위바위보를 할 때 내는 손가락의 개수. 0 또는 2 또는 5
switch (fingersOut) {
  // 순서 상관 없음
  case 2:   // fingersOut이 2일 때
    console.log('가위');
    break;  // 명령문을 수행하면 switch문을 끝내라는 의미
  case 0:
    console.log('바위');
    break;
  case 5:
    console.log('보');
    break;
  default:  // case에 해당하는 값이 없을 때
    console.log('무효');
}

const direction = 'east' // 방향
let directionKor;

switch (direction) {
  case 'north':
    directionKor = '북';
    break;
  case 'south':
    directionKor = '남';
    break;
  case 'east':
    directionKor = '동';
    break;
  case 'west':
    directionKor = '서';
    break;
  default:
    directionKor = '무효';
}

console.log(directionKor);

const month = 7;  // 월
let season = '';  // 분기

switch (month) {
  case 1: case 2: case 3:
    season = '1분기'; break;

  case 4: case 5: case 6:
    season = '2분기'; break;

  case 7: case 8: case 9:
    season = '3분기'; break;

  case 10: case 11: case 12:
    season = '4분기'; break;

  default: 
    season = '잘못된 월입니다.';
}

console.log(season);

const startMonth = 12;  // 월
let holidays = '분기 내 휴일:';

switch (startMonth) {
  case 1:
    holidays += ' 설날';
  case 2:
  case 3:
    holidays += ' 3•1절';
    break;

  case 4:
  case 5:
    holidays += ' 어린이날';
  case 6:
    holidays += ' 현충일';
    break;

  case 7:
  case 8:
    holidays += ' 광복절';
  case 9:
    holidays += ' 추석';
    break;

  case 10:
    holidays += ' 한글날';
  case 11:
  case 12:
    holidays += ' 크리스마스';
    break;

  default: 
    holidays = '잘못된 월입니다.';
}

console.log(holidays);