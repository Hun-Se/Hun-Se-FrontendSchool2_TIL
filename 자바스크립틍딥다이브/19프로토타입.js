// const obj = new Object();
// console.log(obj.constructor === Object);

// const add = new Function("a", "b", "return a + b");
// // console.log(add);
// console.log(add.constructor === Function);

// function Person(name) {
//   this.name = name;
// }

// // me 객체를 생성한 생성자 함수 Person
// const me = new Person("lee");
// console.log(me.constructor === Person);

// const obj = {};

// const add = function (a, b) {
//   return a + b;
// };

// const arr = [1, 2, 3];

// const regexp = /is/gi;

// const obj = {};

// console.log(obj.constructor === Object);

// 인수가 전달되지 않았을 때 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다.
// let obj = new Object();

// // new.target이 undefined Object가 아닌경우 인스턴스 -> Foo.prototype -> Object.prototype 순
// class Foo extends Object {}

// new Foo();

// // 인수가 전달된 경우 인수를 객체로 변환
// obj = new Object(123);
// console.log(obj);

// obj = new Object("123");
// console.log(obj);

// function foo() {}

// console.log(foo.constructor === Function);

function Person(name) {
  this.name = name;
}

console.log(Person.prototype);
