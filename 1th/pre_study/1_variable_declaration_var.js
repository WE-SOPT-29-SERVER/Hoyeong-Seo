console.log(a);
// undefined
//@ 'hoisting' 이루어짐
var a = 'this is var';
console.log(a);
// this is var

var a = 'var은 중복 선언이 가능함!'
console.log(a);
//SyntaxError: Identifier 'a' has already been declared

a = 'var은 값 재할당도 가능함!';
console.log(a);
// var은 값 재할당도 가능함!

a = 'var의 function level scope 테스트용 - 함수 내의 지역변수로 간주되는지?'
function x() {
  a = 'a is "function level scope" ';
}
console.log(a);
// 'var의 function level scope 테스트용 - 함수 내의 지역변수로 간주되는지?'

x()
console.log(a);
// a is "function level scope" 

