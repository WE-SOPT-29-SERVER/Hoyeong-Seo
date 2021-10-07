
let a = 'this is let';
console.log(a);
// 'this is let'

a = 'let은 값 재할당 가능함!';
console.log(a);
// let은 값 재할당 가능함!

function x() {
  a = 'a is "block level scope" 이므로 이 문장은 출력되지 않음';
}
console.log(a);
// let은 값 재할당 가능함!

var b = 'var';
if(true) {
    let a = 'block level scope라서 지역변수로 간주!';
    var b = 'var은 function level scope라서 블록 내에서는 전역변수로 간주!';
}
console.log(a);
console.log(b);
// let은 값 재할당 가능함!
// var은 function level scope라서 블록 내에서는 전역변수로 간주!