const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1.description);
console.log(symbol1 == symbol2) //false -> symbol은 유일한 식별자를 나타낸다.

console.log('---------------------------')

const includes = Symbol('커스텀 includes 함수');

Array.prototype[includes] = function() {
  return 'its symbol';
}

var arr = [1, 2, 3];
console.log(arr.includes(1)); // true, JS 기본 includes 함수
console.log(arr['includes'](1)); // true, JS 기본 includes 함수
console.log(arr[includes]()); // its Symbol, 커스텀 includes 함수