function Robot() {
    this.name = name;
}

Robot.prototype.sayYourName = function () {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
}

const bot1 = new Robot('재현');

class RobotClass {
    // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다. 
    // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
    constructor(name) {
        this.name = name;
    }

    // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

class ProfileClass {
    constructor(name, address, phonenum) {
        this.name = name;
        this.address = address;
        this.phonenum = phonenum;
        
    }

    sayYourName () {
        console.log(`제이름은 ${this.name}입니다.`)
    }
}
