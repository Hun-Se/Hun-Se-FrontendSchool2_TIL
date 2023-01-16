"use strict";
// const b: string = "gi";
Object.defineProperty(exports, "__esModule", { value: true });
// return 값에 is가 들어가면 custom 타입가드 함수이다.
function catOrDog(a) {
    // 타입 판별을 직접 만들기
    if (a.meow) {
        return false;
    }
    return true;
}
// 타입을 구분해주는 커스텀 함수를 만들 수 있다. is가 있어야 함수안의 if문에서 타입을 확인 할 수 있다.
function pet(a) {
    if (catOrDog(a)) {
        console.log(a.bow);
    }
    if ("meow" in a) {
        console.log(a.meow);
    }
}
class B {
    constructor() {
        this.a = "123";
        this.b = "world";
    }
}
class C extends B {
}
new C().a;
new C().b;
