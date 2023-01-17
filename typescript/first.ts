// const b: string = "gi";

import {
  ClassificationType,
  forEachChild,
  isConstructorDeclaration,
} from "typescript";

// const d: undefined = undefined;
// const e: null = null;
// const f: symbol = Symbol.for("abc");

// // function add(x: number, y: number): number {
// //   return x + y;
// // }
// // type Add = (x: number, y: number) => number;

// // interface Add {
// //   (x: number, y: number): number;
// // }

// // const add: Add = (x, y) => x + y;

// // const obj: { lat: number; lon: number } = { lat: 1, lon: 2 };

// const arr: string[] = ["123", "hi", "567"];
// const arr2: Array<number> = [123, 456];
// const arr3 = [123, 457, "f"];

// // function add(x: number, y: number) {
// //   return x + y;
// // }
// // const result = add(1, 2);

// // let p = document.createElement("head");
// // !를 쓰면 절대 null이 올리 없다. 라는 뜻인데 비추 head 태그가 없을 수 있기 때문에 절대라는 말을 없다.
// const head = document.querySelector("#head");

// if (head) {
//   head.innerHTML = "";
//   console.log(head);
// }

// type World = "world" | "hell";

// type Greeting = `hello ${World}`;

// function rest(a: number, ...args: string[]) {
//   console.log(a, args);
// }

// rest(1, "1", "2", "3");

// const tuple: [string, number] = ["1", 1];

// //error
// // tuple[2] = "hello";

// tuple.push("hello");

// // 여러개의 변수들을 하나의 그룹으로 묶을 때 사용하지만 일반적으로 객체로 묶는다.
// const enum EDrection {
//   Up = 3,
//   Down,
//   Left,
//   Right,
// }

// const ODirection = {
//   Up: 0,
//   Down: 1,
//   Left: 2,
//   Right: 3,
// } as const;

// // const a = EDrection.Up;
// const c = EDrection.Left;

// // const obj = { a: "123", b: "hello", c: "world" } as const;
// type Key = typeof obj[keyof typeof obj];

// // type A = { a: string };
// // const a: A = { a: "hello" };

// // interface B {
// //   a: string;
// // }
// // const bc: B = { a: "hello" };

// // error
// // function add(x: string | number, y: string | number): string | number {
// //   return x + y;
// // }

// // 모든 속성이 다있어야 한다.
// // type A = { hello: "world" } & { zero: "cho" };

// // // 여러가지 중 하나만 있어도 된다.
// // type B = { hello: "world" } | { zero: "cho" };

// // const a: A = { hello: "world", zero: "cho" };

// interface Props {}
// type Type = string | number;
// enum Hello {
//   Left,
//   Right,
// }

// const j: Props = {};

// // interface가 extends를 통한 확장이 용이하기 때문에 실무에서 많이 쓰인다.

// type Name = { name: string };
// type Age = { age: number };

// type NameAge = Name | Age;

// type C = { name: string; age: number }; // === Name & Age

// interface A1 {
//   a: string;
// }
// const obj = { a: "hello", b: "world" };
// const obj1: A1 = obj;

// //잉여 속성 검사

// // function foo(): void {
// //   return undefined;
// // }

// //매개변수, 메서드로 선언한 void
// function foo(callback: () => void): void {}

// //리턴값 void
// interface Human {
//   talk: () => void;
// }

// const human: Human = {
//   talk() {
//     return 3;
//   },
// };

// // Human의 return type을 void로 선언했기 때문에 return3을 무시하고 void로 return된다.
// const ticktalk = human.talk();

// // 내가 해당 변수는 무조건 return 3(number)이다. 했을때 방법
// const ttalk = human.talk() as unknown as number;

// // 강제타입 변환 다른 방법 하지만 위의 as방법을 사용하는 것을 추천한다.(추후에 리엑트에서 태그를 사용할 때 typescript가 헷갈리기 떄문)
// const tttalk = <number>(<unknown>human.talk());

// // declare는 자바스크립트로 변환할 떄 사라진다.
// // 매개변수의 void는 오류를 발생시키지 않는다.
// declare function forEach(arr: number[], callback: (el: number) => void): void;

// let target: number[] = [];
// forEach([1, 2, 3], (el) => {
//   target.push(el);
// });
// forEach([1, 2, 3], (el) => target.push(el));

// // any 쓸빠에는 unknown을 쓴다. any는 타입을 포기해버리는거고, unknown을 타입을 정확하게 모르겠을 때 사용

// //error는 unknown
// try {
// } catch (error) {
//   (error as Error).message;
// }

// // 위험한 코드 a가 num이 아닐 수 있다. unknown, 만들어놓은 타입이 틀렸을 때 as를 쓰고 나머지는 as의 사용을 자제해야한다.
// // function numOrStr(a: number | string) {
// //   (a as number).toFixed(1);
// // }

// // a의 타입가든
// // function numOrStr(a: number | string) {
// //   if (typeof a === "number") {
// //     a.toFixed(1);
// //   }

// //   if (typeof a === "string") {
// //     a.charAt(3);
// //   }
// // }

// function numOrStr(a: number | number[]) {
//   if (Array.isArray(a)) {
//     a.concat(4);
//   } else {
//     a.toFixed(3);
//   }
// }

// numOrStr(123);
// numOrStr([1, 2, 3]);

// class A {
//   aaa() {}
// }

// class B {
//   bbb() {}
// }

// function aOrb(param: A | B) {
//   if (param instanceof A) {
//     param.aaa();
//   }
// }

// aOrb(new A());
// aOrb(new B());

// 보통은 값으로 구분하는 방법을 많이 사용한다.
// type B = { type: "b"; bbb: string };
// type C = { type: "c"; ccc: string };
// type D = { type: "d"; ddd: string };
// type A = B | C | D;
// function typeCheck(a: A) {
//   //속성으로 타입체크
//   if ("bbb" in a) {
//     a.type;
//     // 값으로 타입체크
//   } else if (a.type === "c") {
//     a.ccc;
//   } else {
//     a.ddd;
//   }
// }

//개체에다 type을 작성해 놓는 습관을 들여 타입을 쉽게 체크 할 수 있도록 해두면 편하다. 이를 라벨을 붙여준다라는 표현을 사용한다.
// const human = { type: "human" };
// const dog = { type: "dog" };
// const cat = { type: "cat" };

// if (a.type === "human") {
// }

// interface Cat {
//   meow: number;
// }

// interface Dog {
//   bow: number;
// }

// // return 값에 is가 들어가면 custom 타입가드 함수이다.
// function catOrDog(a: Cat | Dog): a is Dog {
//   // 타입 판별을 직접 만들기
//   if ((a as Cat).meow) {
//     return false;
//   }
//   return true;
// }

// 타입을 구분해주는 커스텀 함수를 만들 수 있다. is가 있어야 함수안의 if문에서 타입을 확인 할 수 있다.
// function pet(a: Cat | Dog) {
//   if (catOrDog(a)) {
//     console.log(a.bow);
//   }
//   if ("meow" in a) {
//     console.log(a.meow);
//   }
// }
// const f: symbol = Symbol.for("abc");

// // function add(x: number, y: number): number {
// //   return x + y;
// // }
// // type Add = (x: number, y: number) => number;

// // interface Add {
// //   (x: number, y: number): number;
// // }

// // const add: Add = (x, y) => x + y;

// // const obj: { lat: number; lon: number } = { lat: 1, lon: 2 };

// const arr: string[] = ["123", "hi", "567"];
// const arr2: Array<number> = [123, 456];
// const arr3 = [123, 457, "f"];

// // function add(x: number, y: number) {
// //   return x + y;
// // }
// // const result = add(1, 2);

// // let p = document.createElement("head");
// // !를 쓰면 절대 null이 올리 없다. 라는 뜻인데 비추 head 태그가 없을 수 있기 때문에 절대라는 말을 없다.
// const head = document.querySelector("#head");

// if (head) {
//   head.innerHTML = "";
//   console.log(head);
// }

// type World = "world" | "hell";

// type Greeting = `hello ${World}`;

// function rest(a: number, ...args: string[]) {
//   console.log(a, args);
// }

// rest(1, "1", "2", "3");

// const tuple: [string, number] = ["1", 1];

// //error
// // tuple[2] = "hello";

// tuple.push("hello");

// // 여러개의 변수들을 하나의 그룹으로 묶을 때 사용하지만 일반적으로 객체로 묶는다.
// const enum EDrection {
//   Up = 3,
//   Down,
//   Left,
//   Right,
// }

// const ODirection = {
//   Up: 0,
//   Down: 1,
//   Left: 2,
//   Right: 3,
// } as const;

// // const a = EDrection.Up;
// const c = EDrection.Left;

// // const obj = { a: "123", b: "hello", c: "world" } as const;
// type Key = typeof obj[keyof typeof obj];

// // type A = { a: string };
// // const a: A = { a: "hello" };

// // interface B {
// //   a: string;
// // }
// // const bc: B = { a: "hello" };

// // error
// // function add(x: string | number, y: string | number): string | number {
// //   return x + y;
// // }

// // 모든 속성이 다있어야 한다.
// // type A = { hello: "world" } & { zero: "cho" };

// // // 여러가지 중 하나만 있어도 된다.
// // type B = { hello: "world" } | { zero: "cho" };

// // const a: A = { hello: "world", zero: "cho" };

// interface Props {}
// type Type = string | number;
// enum Hello {
//   Left,
//   Right,
// }

// const j: Props = {};

// // interface가 extends를 통한 확장이 용이하기 때문에 실무에서 많이 쓰인다.

// type Name = { name: string };
// type Age = { age: number };

// type NameAge = Name | Age;

// type C = { name: string; age: number }; // === Name & Age

// interface A1 {
//   a: string;
// }
// const obj = { a: "hello", b: "world" };
// const obj1: A1 = obj;

// //잉여 속성 검사

// // function foo(): void {
// //   return undefined;
// // }

// //매개변수, 메서드로 선언한 void
// function foo(callback: () => void): void {}

// //리턴값 void
// interface Human {
//   talk: () => void;
// }

// const human: Human = {
//   talk() {
//     return 3;
//   },
// };

// // Human의 return type을 void로 선언했기 때문에 return3을 무시하고 void로 return된다.
// const ticktalk = human.talk();

// // 내가 해당 변수는 무조건 return 3(number)이다. 했을때 방법
// const ttalk = human.talk() as unknown as number;

// // 강제타입 변환 다른 방법 하지만 위의 as방법을 사용하는 것을 추천한다.(추후에 리엑트에서 태그를 사용할 때 typescript가 헷갈리기 떄문)
// const tttalk = <number>(<unknown>human.talk());

// // declare는 자바스크립트로 변환할 떄 사라진다.
// // 매개변수의 void는 오류를 발생시키지 않는다.
// declare function forEach(arr: number[], callback: (el: number) => void): void;

// let target: number[] = [];
// forEach([1, 2, 3], (el) => {
//   target.push(el);
// });
// forEach([1, 2, 3], (el) => target.push(el));

// // any 쓸빠에는 unknown을 쓴다. any는 타입을 포기해버리는거고, unknown을 타입을 정확하게 모르겠을 때 사용

// //error는 unknown
// try {
// } catch (error) {
//   (error as Error).message;
// }

// // 위험한 코드 a가 num이 아닐 수 있다. unknown, 만들어놓은 타입이 틀렸을 때 as를 쓰고 나머지는 as의 사용을 자제해야한다.
// // function numOrStr(a: number | string) {
// //   (a as number).toFixed(1);
// // }

// // a의 타입가든
// // function numOrStr(a: number | string) {
// //   if (typeof a === "number") {
// //     a.toFixed(1);
// //   }

// //   if (typeof a === "string") {
// //     a.charAt(3);
// //   }
// // }

// function numOrStr(a: number | number[]) {
//   if (Array.isArray(a)) {
//     a.concat(4);
//   } else {
//     a.toFixed(3);
//   }
// }

// numOrStr(123);
// numOrStr([1, 2, 3]);

// class A {
//   aaa() {}
// }

// class B {
//   bbb() {}
// }

// function aOrb(param: A | B) {
//   if (param instanceof A) {
//     param.aaa();
//   }
// }

// aOrb(new A());
// aOrb(new B());

// 보통은 값으로 구분하는 방법을 많이 사용한다.
// type B = { type: "b"; bbb: string };
// type C = { type: "c"; ccc: string };
// type D = { type: "d"; ddd: string };
// type A = B | C | D;
// function typeCheck(a: A) {
//   //속성으로 타입체크
//   if ("bbb" in a) {
//     a.type;
//     // 값으로 타입체크
//   } else if (a.type === "c") {
//     a.ccc;
//   } else {
//     a.ddd;
//   }
// }

//개체에다 type을 작성해 놓는 습관을 들여 타입을 쉽게 체크 할 수 있도록 해두면 편하다. 이를 라벨을 붙여준다라는 표현을 사용한다.
// const human = { type: "human" };
// const dog = { type: "dog" };
// const cat = { type: "cat" };

// if (a.type === "human") {
// }

// interface Cat {
//   meow: number;
// }

// interface Dog {
//   bow: number;
// }

// return 값에 is가 들어가면 custom 타입가드 함수이다.
// function catOrDog(a: Cat | Dog): a is Dog {
//   // 타입 판별을 직접 만들기
//   if ((a as Cat).meow) {
//     return false;
//   }
//   return true;
// }

// 실제적인 예제
// const isRejected = (
//   input: PromiseSettledResult<unknown>
// ): input is PromiseRejectedResult => input.status === "rejected";
// const isFulfilled = <T>(
//   input: PromiseSettledResult<T>
// ): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

// const promises = await Promise.allSettled([
//   Promise.resolve("a"),
//   Promise.resolve("b"),
// ]);

// //성공했는지 안했는지 모른다.
// // const errors = promises.filter((promise) => promise.status === "rejected");
// const errors = promises.filter(isRejected);

// // export {};

// // {}, Object는 모든타입을 나타내는 것이다.(객체 x)
// const x: {} = "hello";
// const y: Object = "h1";

// // 객체: object 하지만 object 지양, interface type class 사용할 것
// const xx: object = "h1";
// const yy: object = { hello: "world" };
// const z: unknown = "h1";

// // unknown = {} | null | undefined
// // 4.8버전 부터는 unknown은 unknown을 리턴한다.
// if (z) {
//   z;
// } else {
//   z;
// }

//type A = {a: string, b: string, c: string};
// type A = { [key: string]: string };
// const aaa: A = { a: "3", b: "5", c: "6", d: "123" };

// type B = "Human" | "Mammal" | "Animal";
// type A = { [key in B]: number };
// const aaa: A = { Human: 123, Mammal: 5, Animal: 7 };

// mapped type
// type B = "Human" | "Mammal" | "Animal";
// type A = { [key in B]: B };
// const aaa: A = { Human: "Human", Mammal: "Mammal", Animal: "Animal" };

// class의 이름은 그자체로 타입으로 쓸 수 있다.
// class A {
//   private a: string;
//   #b: number;
//   constructor(a: string, b: number = 123) {
//     this.a = "123";
//     this.#b = 123;
//   }

//   method() {}
// }

// type Aa = A; // 이때 new A를 가르킨다.
// const a: A = new A("123");

// typeof A; // 이때 class A 자체를 가르킨다.

// // 클래스 자체를 가르키기 때문에 오류
// // const b: typeof A = new A();

// const b: typeof A = A;

// interface A {
//   readonly a: string;
//   b: string;
// }
// class B implements A {
//   readonly a: string = "123";
//   b: string = "world";
// }

// // protected는 상속받아서 사용 할 수 있다.
// class C extends B {
//   method() {
//     console.log(this.a);
//     console.log(this.b);
//   }
// }
// new C().a;
// new C().b;

// function abc(a: number, b?: number, c?: number) {}
// abc(1);
// abc(1, 2);
// abc(1, 2, 3);
// abc(1, 2, 3, 4);

// T를 srtirng으로 좁히기
// function add<T extends string, K extends number>(x: T, y: K): T {
//   return x + y;
// }

// add(1, 2);
// add("1", "2");
// add("1", 2);

// class 자체를 넣을 때
// function add<T extends abstract new (...args: any) => any>(x: T) {
//   return x;
// }
// class A {}
// add(A);

// interface Array<T> {
//   forEach(
//     callbackfn: (value: T, index: number, array: T[]) => void,
//     thisArg?: any
//   ): void;
//   map<U>(
//     callbackfn: (value: T, index: number, array: T[]) => U,
//     thisArg?: any
//   ): U[];

//   filter<S extends T>(
//     predicate: (value: T, index: number, array: T[]) => value is S,
//     thisArg?: any
//   ): S[];
// }

// 제네릭 때문에 타입 추론을 잘해준다.
// ["1", 2, true].forEach((item) => {
//   console.log(item);
// });

// const predicated = (value: string | number): value is string =>
//   typeof value === "string";

// const filtered = ["1", 2, "3", 4, "5"].filter(predicated);
// const filtered = ["1", 2, "3", 4, "5"].filter<string>(
//   (value): value is string => typeof value === "string"
// );

// interface Arr<T> {
//   // forEach(callback: (item: T) => void): void;
//   forEach(
//     callbackfn: (value: T, index: number, array: T[]) => void,
//     thisArg?: any
//   ): void;
// }

// const a: Arr<number> = [1, 2, 3];
// a.forEach((item) => {
//   console.log(item);
//   item.toFixed(1);
// });

// a.forEach((item) => {
//   console.log(item);
//   return "3";
// });

// const b: Arr<string> = ["1", "2", "3"];
// b.forEach((item) => {
//   console.log(item);
//   item.charAt(3);
// });

// b.forEach((item) => {
//   console.log(item);
//   return "3";
// });

// const c: Arr<string> = ["1", "2", "3"];
// c.forEach((item) => {
//   console.log(item);
//   item.charAt(3);
// });

// c.forEach((item) => {
//   console.log(item);
//   return "3";
// });

// interface Arr<T> {
//   map<S>(callback: (v: T) => S): S[];
//   // map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
// }

// const a: Arr<number> = [1, 2, 3];
// const b = a.map((v) => v + 1);
// const c = a.map((v) => v.toString());
// const d = a.map((v) => v % 2 === 0);
// const e: Arr<string> = ["1", "2", "3"];
// const f = e.map((v) => +v);

// interface Arr<T> {
//   filter<S extends T>(callback: (v: T) => v is S): S[];
//   filter<S extends T>(
//     predicate: (value: T, index: number, array: T[]) => value is S,
//     thisArg?: any
//   ): S[];
// }

// const a: Arr<number> = [1, 2, 3];

// const b = a.filter((v): v is number => v % 2 === 0);
// const c: Arr<number | string> = [1, "2", 3, "4", 5];
// const d = c.filter((v): v is string => typeof v === "string");

// 공변성, 반공변성
// return 값이 좁은타입에서 넓은 타입 대입이 가능, 매개변수는 넓은 타입에서 좁은 타입으로 대입가능
// function a(x: string | number): number {
//   return +x;
// }

// a("1");
// type B = (x: string) => number | string;
// const b: B = a;

// interface Axios {
//   get(): void;
// }

// interface CustomError extends Error {
//   name: string;
//   message: string;
//   stack?: string;
//   response?: {
//     data: any;
//   };
// }

// declare const axios: Axios;

// (async () => {
//   try {
//     await axios.get();
//   } catch (err: unknown) {
//     if (err instanceof typeof CustomError){
//       const customError = err;
//     console.error(customError.response?.data);
//     }
//   }
// })();

// interface Profile {
//   name: string;
//   age: number;
//   married: boolean;
// }
// type Name = Profile["name"];

// const hun: Profile = {
//   name: "hun",
//   age: 28,
//   married: false,
// };

// Partial를 쓰면 모두 옵셔널로 바뀌기 때문에 잘 쓰지 않는다.
// Pratiol<Profile> Profile을 nmae?:string; 으로 바꾼다.
// const newHun: Partial<Profile> = {
//   name: "hun",
//   age: 28,
// };

// type P<T> = {
//   [key in keyof T]?: T[key];
// }

// const newHun: P<Profile> = {
//   name: "hun",
//   age: 28,
// };

// Pick 이나 Omit을 쓰기 Pick은 필요한 타입 가져오기 Omit은 필요없는 타입 빼버리기

// interface Profile {
//   name: string;
//   age: number;
//   married: boolean;
// }

// type P<T, S extends keyof T> = {
//   [Key in S]: T[Key];
// };

// const hun: Profile = {
//   name: "hun",
//   age: 28,
//   married: false,
// };

// // const newHun: P<Profile, "name" | "age"> = {
// //   name: "hun",
// //   age: 28,
// // };

// type Animal = "Cat" | "Dog" | "Human";
// type Mammal = Exclude<Animal, "Human">;
// type Human = Extract<Animal, "Cat" | "Dog">;

// type A = Exclude<keyof Profile, "married">;

// type O<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;
// const newHun: O<Profile, "married"> = {
//   name: "hun",
//   age: 29,
// };

// interface Profile {
//   name?: string;
//   age?: number;
//   married?: boolean;
// }
// type Name = Profile["name"];

// type R<T> = {
//   [Key in keyof T]-?: T[Key];
// };

// const hun: Required<Profile> = {
//   name: "hun",
//   age: 29,
//   married: false,
// };

// hun.name = "sehun";

// interface Obj {
//   [key: string]: number;
// }
// type R<T extends keyof any, S> = {
//   [Key in T]: S;
// };
// const a: Record<string, number> = { a: 3, b: 5, c: 7 };
// type N<T> = T extends null | undefined ? never : T;

// type A = string | null | undefined | boolean | number;
// type B = NonNullable<A>;

function zip(
  x: number,
  y: string,
  z: boolean
): { x: number; y: string; z: boolean } {
  return { x, y, z };
}
//함수제한
// infer는 extends에서만 사용이 가능하고 매개변수의 값을 추론조건? 추론 성공시의 값 : 추론 실패 시의 값을 나타낸다.
// type P<T extends (...args: any) => any> = T extends (...args: infer A) => any
//   ? A
//   : never;
// type R<T extends (...args: any) => any> = T extends (...args: any) => infer A
//   ? A
//   : never;
// type Params = P<typeof zip>;
// type Return = R<typeof zip>;
// type First = Params[0];

// type ConstructorParameters<T extends abstract new (...args: any) => any> =
//   T extends abstract new (...args: infer P) => any ? P : never;

// const a = "Hello World";
// const b: Lowercase<typeof a> = a.toLowerCase;

// infer

const p1 = Promise.resolve(1)
  // Promise<number>
  .then((a) => a + 1)
  // Promise<number>

  .then((a) => a + 1)
  // Promise<number>
  .then((a) => a.toString());
// Promise<string>
const p2 = Promise.resolve(2); //Promise number
const p3 = new Promise((res, rej) => {
  setTimeout(res, 1000);
});

Promise.all([p1, p2, p3]).then((result) => {
  console.log(result); // ["3",2,undefined]
});
