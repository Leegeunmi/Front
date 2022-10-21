'use strict'

class User {
  constructor(name,age,local) {
    this.name = name;
    this.age = age;
    this.local = local;
  }
  introduce(){
    console.log(`안녕하세요. ${this.local}에 사는 ${this.age}살 ${this.name}입니다.`);
  }
  get age(){//획득
    return this._age; // _는 규칙 (get과 set에 같은 변수명 쓰고, this._ 언더바 꼭 사용)
  }
  set age(value){//설정
    this._age = value < 0 ? 0 : value;
  }
}

let user_1 = new User('홍길동',50,'대구');
user_1.introduce();
