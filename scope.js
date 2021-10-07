//Function Scope
//var
// if (true) {
//   var x = 'var';
// }
// console.log(`var : ${x}`);

//Block Scope
// let, const
if (true) {
  let y = 'let';
  const z = 'const';
}
console.log(`let : ${y}`);
console.log(`const : ${z}`);

//Function Scope
// var is inaccessible from outside of the function
