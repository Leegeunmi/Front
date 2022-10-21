'use strict'
//일반함수 표기
// function(){
//   //실행문
// }
let commonFunc = function(){
  //실행문
  console.log('나는 일반 표기 함수입니다.');
}


//선언적 함수
function numFun(){
  //실행문
}


//arrow function (화살표함수)
// ES6이상 사용
let arrowFunc = (a,b) => { //function글자 생략
  console.log('나는 화살표 표기 함수입니다.');
}
commonFunc();
arrowFunc();



// 즉시실행함수
// (function(){}())
(function(){
  console.log('나는 즉시 실행 함수입니다.');
}())
