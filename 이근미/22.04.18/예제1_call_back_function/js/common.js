'use strict'
/*
--표기방법에 따른 분류--
익명함수
function(){}

선언적 함수
function testFunc(){}

--사용방법에 따른 분류--
재귀함수
function testFunc(){
  testFunc();
}

콜백함수
: 다른 함수의 매개변수로 사용되거나,
  event로 특정시점에 호출되는 함수.
  비동기적으로 작동될 때 사용.(일방적이다. ex) a가 작동될 때 b및 다른 것에 영향을 주지 않음)
*/
//--------------------------------------------------------------------------------------------------


//<기존호출방식>
// function avgCalc(a,b,c){
//   let sum = a + b;
//   return sum;//(기존 호출방법)
// }
// console.log(avgCalc(1,2));


//<콜백함수호출방식>
//<선언>
function avgCalc(a,b,c){//a,b는 sum 숫자타입 / c는 함수타입
  let sum = a + b;
  c(sum)//함수실행
}

//< 익명함수로 콜백함수 호출 >  //(22.04.11.이벤트리스너에서 'click'함수 콜백함수 사용했었음)
// avgCalc(10,30,function(){});
avgCalc(10,30,function(num){
  let avg = num/2;
  console.log(avg);
});

//< arrow function으로 콜백함수 호출 >
avgCalc(10,30, (num) => {
  let avg = num/2;
  console.log(avg);
})

//< 선언적 함수로 콜백함수 부르기 >
function avg(num){
  let avg = num/2;
  console.log(avg);
}
avgCalc(10,30,avg);
/*
let sum = 10 + 30;
avg(sum)
*/


//--------------------------------------------------------------------------------------------------
//호이스팅  익명함수 선언적함수 콜백함수-선택적으로 함수를 호출 등등 면접 시 많이 하는 질문파트


//(es5 es6간의 문제점)
window.onload = function(){
  document.getElementById('wrap').innerHTML = myFunction();
  function myFunction(){
    return this;//window객체
  }
}
// -> 'use strict'(엄격모드)일때는 unfined가 나오고
// -> 'use strict'(엄격모드)풀면 [object Window]나옴

//--------------------------------------------------------------------------------------------------


//ex) 10,20 입력값으로 직사각형 넓이를 구하는 내부함수(콜백함수) 만들기
function areaFunc(a,b,c){
  let mul = a * b;
  return c(mul);
}

function squareFunc(num){
  // console.log(num);
  return num; //실질적으로는 console로 말고 return으로 값을 반환해야한다.
}

console.log(areaFunc(10,20,squareFunc));


//me -----------
// //< 익명함수로 콜백함수 호출 >
// areaFunc(10,20, function(mul){
//   let area = mul
//   console.log(area);
// });
//
// //< arrow function으로 콜백함수 호출 >
// areaFunc(10,20, (mul) => {
//   let area = mul
//   console.log(area);
// });
//
// //< 선언적 함수로 콜백함수 부르기 >
// function area(mul){
//   let area = mul;
//   console.log(area);
// }
// areaFunc(10,20,area);
//
//
// // function square(a,b,c){
// //   let area = a * b;
// //   return area;
// // }
// // console.log(10,20);
