'use strict'

class Mobility {
  static staticField = 'stariv1234'; //접근이 불가했던 private와  달리 일부 접근이 가능
  constructor(kind,mName,year){
    this.kind = kind;
    this.mName = mName;
    this.year = year;
  }
}

let mobility1 = new Mobility('승용차','v3','2022');
console.log(mobility1.staticField); //undefined /// 생성자 객체에서는 확인 할 수 없다.
console.log(Mobility.staticField); //stariv1234 /// 원형 객체에서는 상수값을 가져올 수 있다.
