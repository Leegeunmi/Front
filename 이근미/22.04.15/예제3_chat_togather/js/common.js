'use strict'
function chattingFunc(e){ //previousElementSibling mdn참조
//previousElementSibling : 부모영역의 자식요소 중 첫번째를 가지고 온다.
  // console.log(e);
  // console.log(e.previousElementSibling);
  console.log(e.previousElementSibling.value);//채팅창에 입력한 값을 출력.
  let elem = document.querySelectorAll('.chat-box');
  let inputTxt = e.previousElementSibling.value;
  let htmlTxt = '';
  // console.log(elem[0].innerHTML);
  htmlTxt = elem[0].innerHTML;//기존 채팅 목록을 가져옴
  htmlTxt += `<div class= "line char-a right"><div class="txt">${inputTxt}</div></div>`;
  elem[0].innerHTML = htmlTxt;
}
