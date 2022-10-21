'use strict'
//클라이언트로 부터 입력을 받아 올 수 있는 함수 -> prompt

console.log('test');
window.onload = function(){ //윈도우가 로드된 후 실행문 실행
  //실행문입력 영역
  let inputTextNum = '이름을 입력하세요.';
  let nameText =  prompt(inputTextNum); //  //prompt : input
  console.log(nameText);

  // 1) innerHTML : 값을 html타입으로 반환한다. : output
  // document.body.innerHTML = '<p class = "name">'+nameText+'</p>'

  // 2) innerText
  // document.body.innerText ='<input class="name" placeholder="" value="">';

  //변수와 문자열 조합하기
  // document.body.innerHTML = '<input class="name" placeholder="'+ inputTextNum +'" value="'+ nameText +'">';
  document.body.innerHTML = `<input class="name" placeholder="${inputTextNum}" value="${nameText}">`;
}
