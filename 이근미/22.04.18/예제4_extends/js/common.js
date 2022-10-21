'use strict'
//function testFunc(){}

// class Test {
//   constructor(){ // constructor무조건 적어야한다.
//     this.num = 'testNum'; // constructor안에 있다 -> this.~
//   }
// }
//
// let textBox = new Test(); //new생성자를 통해 textBox에 할당
// console.log(textBox.num);

//-----------------------------------------------------------

// class Test {
//   constructor(num){ // constructor무조건 적어야한다.
//     this.num = num; // constructor안에 있다 -> this.~
//   }
// }
//
// let textBox = new Test('안녕하세요'); //new생성자를 통해 textBox에 할당
// console.log(textBox.num);
//
//-----------------------------------------------------------


class Test {
  constructor(num){ // constructor무조건 적어야한다.
    this.num = num; // constructor안에 있다 -> this.~
  }
  popupFunc(){
    alert('This is popup!');
  }
}
let textBox = new Test('안녕하세요'); //new생성자를 통해 textBox에 할당
console.log(textBox.popupFunc());


// //-----------------------------------------------------------
// let objNum = { name : 'Tom'};
// console.log(objNum.name);
// //-----------------------------------------------------------
