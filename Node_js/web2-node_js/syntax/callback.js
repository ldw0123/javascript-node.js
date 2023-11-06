function a() {
  console.log('A');
}
a(); // A

var b = function () {
  // 변수에 함수(=값)을 담는다
  console.log('B');
};
b(); // B

function slowfunc(cb) {
  cb();
}
slowfunc(a); // A
