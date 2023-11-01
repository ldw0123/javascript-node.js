// 파일 목록 알아내기
const testFolder = './data';
const fs = require('fs');

fs.readdir(testFolder, function (err, files) {
  console.log(files);
});
