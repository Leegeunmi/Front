'use strict'
//number string test
window.onload = function(){
  let num = 5; //자료형 number
  let textNum = '안녕하세요';
  let numberVar = 10; //자료형 number
  // console.log(num + numberVar);
  let changeString = String(num); //자료형을 문자형으로 바꿈
  let changeNumber; // -> let changeNumber = null;
  // console.log(changeString + numberVar); -> 510
  // console.log('값: '+changeString+', 데이터타입: '+ typeof(changeString));

  changeString += numberVar; //결과값 문자타입(string) ->510
  // changeString = changeString + numberVar;
  changeNumber = Number(changeString);
  // console.log('값: '+(changeNumber+10)+', 데이터타입: '+ typeof(changeNumber));
  // console.log(changeNumber+20); // -> 510 + 20

let num1 = 5;
let num2 = String(num1);
console.log(typeof(num1)); //number
console.log(typeof(num2)); //string
let num3 = Number(num2);
console.log(typeof(num2)); //string
console.log(typeof(num3)); //number
}
