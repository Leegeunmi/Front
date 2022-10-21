'use strict'
//class list----
function textFunc(){
  let leng = document.querySelector('#text').classList;
  console.log(leng); //브라우저에서 버튼을 누르면 html에 있는 class의 배열호출
  console.log(leng[0]); //브라우저에서 버튼을 누르면 html에 있는 class의 배열에 0번째 자리호출

  /*contains method는 classList에 해당 클래스가 포함되어있는지 여부를 판단하여
  boolean type(true,false)으로 반환한다.*/
  let bulNum = document.querySelector('#text').classList.contains('change-bg');
  console.log(bulNum); //브라우저에서 버튼을 누르면 html에 있는 class의 배열에 change-bg가 있는지 확인
}



function sideMenuSlide(){
  let elem = document.querySelector('#sidemenu');
  let activeNum = elem.classList.contains('on'); //on이 있냐없냐
  if( activeNum){ //on이 있다면
    elem.classList.remove('on'); //on을 지운다
  }else{ //on이 없다면
    elem.classList.add('on'); //on 을 넣는다
  }
}
