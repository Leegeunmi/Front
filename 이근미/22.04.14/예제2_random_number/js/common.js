'use strict'
// let num = prompt('1~10숫자를 입력하세요.','숫자');
//
// num = Math.random()*10; //난수(랜덤숫자) 받기
// num = Math.ceil(num); //소수점 아래 올림
// // Math.round() //소수점 아래 반올림
// // Math.floor() //소수점 아래 내림/버림
// console.log(num);
//
// //console.log(Math.random());
// // console.log(Math.random()*10);
// // console.log(Math.ceil(Math.random()*10));
//
// function getNumber(){
//   document.querySelectorAll('div')[num-1].setAttribute('class','selected');//setAttribute('속성','값');
// }


//------------------------------------------------------------------------------------------------------


let num = prompt('1~10숫자를 입력하세요.','숫자');
num = Number(num);
let randomNum = Math.random()*10;

let sumNum = num + randomNum;
if(sumNum > 10){
  num = sumNum - 10;
}else if(sumNum <= 10){
  num = sumNum;
}
num = Math.ceil(num);


function getNumber(){
  document.querySelectorAll('div')[num].setAttribute('class','selected');//setAttribute('속성','값');
}
