// //복습하기//
// <if문>----------------
//
// if(조건문(true)){
//   실행문
// }else if (true) {
//   실행문
// }else {
//   실행문
// }
//
// <배열>----------------
//
// 자료형 object(객체)
// let array = ['a','b']
// let array = new Array()
//
//
// <재귀함수>----------------
// //자기 스스로 내부에서 호출하는 함수
// -----------------------------------------------------------------------------

// *function : 기능

'use strict'
//함수선언
var repeat = function(){ // repeat:변수 function():함수
  alert('나는 익명함수입니다.');
}
// console.log(typeof(repeat));
// repeat();

function repeat(){
  alert('나는 선언적함수입니다.')
}
// console.log(typeof(repeat));
// repeat(); //함수를 호출하면 익명함수가 실행된다.
          //이유: 선언적함수가 먼저 생성되고 익명함수가 나중에 생성되기 때문이다.
          //호이스팅으로 나중에 생선된 것은 선언영역의 아래쪽에 배치되기 때문이다.
          //let이나 const를 잘 활용하자



//전역변수 / 지역변수------------------------------------------------------------
//전역변수 : num
//지역변수 : i, j, num2, sumCalc

let num = 10;//전역변수
function testFunction(i,j){ //i,j:지역변수(매개변수)
  console.log(j);//2
  let num2 = 20;//지역변수
  let sumCalc = i + j + num + num2;
  return sumCalc;//33
}
console.log(testFunction(1,2)); // i:1 j:2
// console.log(j); // -> 오류 : i와 j는 지역변수 이기 떄문에 실행문 안에서만 사용된다.
let sumTotal = testFunction(1,0);
console.log(typeof(sumTotal));
console.log(`함수에서 반환하는 값을 출력: ${sumTotal}`); //31
