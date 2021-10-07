
let nothing = null;
console.log(`nothing : ${nothing}, type: ${typeof nothing}`);
// nothing : null, type: object

//* 값을 선언해주지 않으면, undefined 자료형이 된다.
let x; 
console.log(`x: ${x}, type ${typeof x}`);
// x: undefined, type undefined

//* 일치연산자 - 강제형변환을 수행하지 않는 엄격한 비교
console.log('null === undefined: ', null === undefined); 
//! null와 undefined는 엄연히 다른 자료형이다
// null === undefined:  false

//* 동등연산자 - 강제형변환으로 공통타입으로 만들고 안의 값 비교만 이루어지는 느슨한 비교
console.log('null == undefined: ', null == undefined);
// null == undefined:  true