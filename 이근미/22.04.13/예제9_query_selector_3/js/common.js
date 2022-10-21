'use strict'
//query selector
// function innerTxt(){//텍스트 출력함수
//   document.querySelector('.content  p').innerHTML = "hello querySelector";
// }

function innerTxt() {
  let inputNum = document.querySelector("#input-text").value;
  document.querySelector('.content h2 p').innerHTML = inputNum;
}
