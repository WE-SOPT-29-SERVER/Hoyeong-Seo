//@ this는 함수를 호출하는 방법에 의해 정해진다

var someone = {
  name : 'hoaeng',
  whoAmI : function () {
    console.log(this);
  }
};

someone.whoAmI(); //? 누가 호출했는가?  A: someone이 호출했지.

var myWhoAmI = someone.whoAmI;
myWhoAmI(); //? 누가 호출했는가? A: myWhoAmI이 속헌 global이 호출했지?

function Person(name) {
  this.name = name;
  this.introduction = function () {
    console.log(`my name is ${this.name}`);
  };
}

var t1 = new Person('hy')
var t2 = new Person('yk')

console.log(t1)
console.log(t2)