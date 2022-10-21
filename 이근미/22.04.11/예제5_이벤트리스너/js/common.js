'use strict'
// 이벤트 리스너 함수 타입 사용방법 1>>선언적 함수
// function getElementNum(){
//   document.getElementById('box').innerHTML = 'test';
// }
// getElementNum();

// //1)엘리먼트안에 직접넣어 함수를 호출하는방식
//
// //2)
//('이벤트 핸들러 명칭', 함수)
// document.getElementById('btn').addEventListener('click',getElementNum); //(어떤 이벤트핸들러를 쓸것인가, 함수)
// /*addEventListener(a,b,c)
// a매개변수 : string타입 이벤트명을 넣어준다.
// b매개변수 : function타입으로 값을 넣어준다.
// c매개변수 : boolean타입 입력 즉, true or false
// default(기본) : false:(버블링),  true:(캡쳐링) (기본적으로 버블링)
// */


// // 이벤트 리스너 함수 타입 사용방법 2>>익명 함수
// document.getElementById('btn').addEventListener('click',function(){
//   document.getElementById('box').innerHTML = '익명함수 타입';
// })

function clickBtn(btn,elem,text){
  let btnSelect = document.getElementById(btn);
  let elemSelect = document.getElementById(elem);
  btnSelect.addEventListener('click',function(){ elemSelect.innerHTML = text; })
}

clickBtn('btn','box','안녕하세요');




//구문
// addEventListener(type, listener);
// addEventListener(type, listener, options);
// addEventListener(type, listener, useCapture);
