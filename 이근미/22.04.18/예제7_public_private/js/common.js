'use strict'
//public - 공공적인   private - 사적인
class User {
  #idNumber = '1234'; //private field ( #블라블라 ) #특정부분 #개별 내부에서는 사용가능 외부에서 직접적으로 불러올 수 없음.
  constructor(name,age,local){
    this.name = name;
    this.age = age;
    this.local = local;
  }
  introduce(){
    console.log(`안녕하세요. ${this.local}에 사는 ${this.age}살 ${this.name}입니다.${this.#idNumber}`);
  }
}

let user_1 = new User('홍길동',50,'대구');
user_1.introduce();
// console.log(user_1.name);
// console.log(user_1.#idNumber); -> private field 외부접근 실행 : error_class영역
