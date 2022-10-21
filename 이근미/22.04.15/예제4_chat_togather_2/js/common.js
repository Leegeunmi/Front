'use strict'
let inputTxt = '';

function inputChat(event) { //키보드 타이핑 및 엔터 버튼 실행---
  // console.log(window.event.keyCode);//키보드 숫자 (엔터==13)
  if (window.event.keyCode == 13) { // 엔터키를 사용했을때
    // console.log('enter');
    if (event.value != '') { //입력창이 비어있지 않을 때 실행
      chattingFunc(event, 0)
      clearText(inputTxt, event, 0);
    }
  }
}

function sendTxt(e) { //보내기 버튼 실행---
  if (e.previousElementSibling.value != '') { //입력창이 비어있지 않을 때 실행
    chattingFunc(e, 1) //메세지 내용이 있을때만 보내기 작동된다.
    clearText(inputTxt, e, 1); //e == button
  }
}

function clearText(t, e, i) { // t : htmlTxt, event(e)
  t = '';
  inputTxt = t;
  if (i == 1) {
    e.previousElementSibling.value = '';
  } else {
    e.value = '';
  }
  // console.log(`전역변수 채팅목록:${htmlTxt},입력창 초기화:${e.previousElementSibling.value}`);
}

function chattingFunc(e, i) { //previousElementSibling mdn참조
  //previousElementSibling : 부모영역의 자식요소 중 첫번째를 가지고 온다.
  // console.log(e);
  // console.log(e.previousElementSibling);
  // console.log(e.previousElementSibling.value);//채팅창에 입력한 값을 출력.
  if (i == 1) { //보내기 버튼으로 입력
    inputTxt = e.previousElementSibling.value; //자기앞에 있는 것을 선택하여 대입
  } else { //엔터키로 입력
    inputTxt = e.value;
  }

  // let htmlTxt = e.previousElementSibling.value;
  // let htmlTxt = '';
  // console.log(elem[0].innerHTML);

  let thisClassName = e.getAttribute('class');
  let elem = document.querySelectorAll('.chat-box')
  let elemLeng = elem.length;
  let txt = [];
  let htmlTxt = [];
  console.log(thisClassName);
  for(let i = 0; i < elemLeng; i++){
    htmlTxt[i] = elem[i].innerHTML//기존 채팅 목록을 가져옴
  }

  // htmlTxt[0] : user-a의 채팅창목록
  // htmlTxt[1] : user-b의 채팅창목록
  // htmlTxt[2] : user-c의 채팅창목록

  if (thisClassName == 'user-a') {
    txt.push(`<div class= "line char-a right"><div class="txt">${inputTxt}</div></div>`);//user-a의 채팅입력
    txt.push(`<div class= "line char-a"><div class="txt">${inputTxt}</div></div>`);//user-b
    txt.push(`<div class= "line char-a"><div class="txt">${inputTxt}</div></div>`);//user-c
  } else if (thisClassName == 'user-b'){
    txt.push(`<div class= "line char-b"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class= "line char-b right"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class= "line char-b"><div class="txt">${inputTxt}</div></div>`);
  }else {
    txt.push(`<div class= "line char-c"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class= "line char-c"><div class="txt">${inputTxt}</div></div>`);
    txt.push(`<div class= "line char-c right"><div class="txt">${inputTxt}</div></div>`);
  }

  for( let i = 0; i < elemLeng; i++){
    htmlTxt[i] += txt[i];//가존 채팅창 내용에 입력된 채팅창 내용을 더함
    elem[i].innerHTML = htmlTxt[i]; //입력된 값을 포함하여 대화창으로 다시 입력
    elem[i].scrollTop = elem[i].scrollHeight - elem[i].offsetHeight; // 스크롤이 생겨서 최신 대화내용이 스크롤 영역으로 들어가서
  }
}



  //코드 줄이기 전--------------------------------------------------------------------------------------------
  //   console.log(thisClassName);
  //   let htmlTxt1 = elem[0].innerHTML;//기존 채팅 목록을 가져옴
  //   let htmlTxt2 = elem[1].innerHTML;
  //   let htmlTxt3 = elem[2].innerHTML;
  //   if(thisClassName == 'user-a') {
  //     htmlTxt1 += `<div class= "line char-a right"><div class="txt">${inputTxt}</div></div>`;
  //     htmlTxt2 += `<div class= "line char-a"><div class="txt">${inputTxt}</div></div>`;
  //     htmlTxt3 += `<div class= "line char-a"><div class="txt">${inputTxt}</div></div>`;
  //   }else if (thisClassName == 'user-b') {
  //     htmlTxt1 += `<div class= "line char-b"><div class="txt">${inputTxt}</div></div>`;
  //     htmlTxt2 += `<div class= "line char-b right"><div class="txt">${inputTxt}</div></div>`;
  //     htmlTxt3 += `<div class= "line char-b"><div class="txt">${inputTxt}</div></div>`;
  //   }else {
  //     htmlTxt1 += `<div class= "line char-c"><div class="txt">${inputTxt}</div></div>`;
  //     htmlTxt2 += `<div class= "line char-c"><div class="txt">${inputTxt}</div></div>`;
  //     htmlTxt3 += `<div class= "line char-c right"><div class="txt">${inputTxt}</div></div>`;  }
  //   elem[0].innerHTML = htmlTxt1;
  //   elem[1].innerHTML = htmlTxt2;
  //   elem[2].innerHTML = htmlTxt3;
  //   // console.log(elem[0].scrollTop);
  //   elem[0].scrollTop = elem[0].scrollHeight - elem[0].offsetHeight;
  //   elem[1].scrollTop = elem[1].scrollHeight - elem[1].offsetHeight;
  //   elem[2].scrollTop = elem[2].scrollHeight - elem[2].offsetHeight;
  // }
  //--------------------------------------------------------------------------------------------
