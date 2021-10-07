//* 함수 만드는 식

//* 1. 함수 선언식
function add(x, y) {
  return x + y;
}
console.log(add(2, 3));

//* 2. 함수 표현식

//! --------난 이걸로 써야겠다--------
var addStr = function(x, y) {
  return x + y;
}
console.log(addStr("안녕", "하세요"));
//! --------난 이걸로 써야겠다--------

//* 3. 화살표 함수 표현식
var add = (x, y) => {
  return x + y;
}
console.log(add(2, 3));

// 로직이 한줄일때 return 문 생략 가능
var add = (x, y) => x + y;

// 매개변수가 하나일때 매개변수 소괄호 생략 가능

var square = x => x * x;

var person = function(name, age) {
  return {
    name: name, 
    age: age,
  };
}