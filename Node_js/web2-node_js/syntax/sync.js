var fs = require('fs');

// fs.readFileSync() 동기
console.log('A');
var result = fs.readFileSync('./sample.txt', 'utf8');
console.log(result);
console.log('C \n');
// ABC 출력

// fs.readFile() 비동기
console.log('A');
// 콜백 함수 이용
var result = fs.readFile('./sample.txt', 'utf8', function (err, result) {
  console.log(result);
});
console.log('C');
// ACB 출력
