'use strict'
//query selector
let num = 0;
function textColorChange(){
  num += 10;
  console.log(num);
  let txtNum = document.querySelector('li .txt');
  txtNum.style.backgroundColor = "red";
  txtNum.style.position = "absolute";
  txtNum.style.left = `${num}px`;
  txtNum.style.top = `${num}px`;
}










// function textColorChange() {
//   // document.getElementsByTagName('p')[0].style.color = "red";
//   // document.querySelector('.txt').style.color = "blue"; //단일 선택
//   let txtNum = document.querySelectorAll('txt'); //class name 'txt'인 배열리스트 가져온다.
//   let txtNumLeng = txtNum.length;
//   console.log(txtNum.length);
//   // txtNum.style.color = "red";
//   for (let i = 0; i < txtNumLeng; i++) {
//     txtNum[i].style.color = "red";
//   }
// }
