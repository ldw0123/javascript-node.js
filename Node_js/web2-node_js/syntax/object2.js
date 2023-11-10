// Array & Object

// JS에서는 함수가 값이 될 수 있고, 변수에 담길 수 있다.
var f = function () {
  console.log(1 + 2);
  console.log(2 + 3);
};

console.log(f); // [Function: f]
f(); // 3 5

// 함수가 배열의 원소로서 존재할 수 있다
var ary = [f];
ary[0](); // 3 5

// 함수가 객체로서 존재할 수 있다
var obj = {
  func: f,
};
obj.func(); // 3 5
