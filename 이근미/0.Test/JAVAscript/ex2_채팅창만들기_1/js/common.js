'use strict'
function chattingFunc(e){
  // console.log(e.previousElementSibling.value);
  //-> 부모영역의 자식요소 중 첫번째를 가지고 온다
  //-> input을 가지고온다. input의 value값을 출력한다.
  let elem = document.querySelectorAll('.chat-box');
  //문서에 있는 .chat-box내용을 elem에 넣는다.
  let inputTxt = e.documentElementSibling.value;
  //채팅창에 입력한 값을 inputTxt에 넣는다.
  let htmlTxt ='';

  htmlTxt = elem[0].innerHTML;
  //html안의 것에 채팅탕에 입력된 값을 htmlTxt에 넣는다.
}
