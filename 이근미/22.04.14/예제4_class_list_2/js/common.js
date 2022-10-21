'use strict'
// //class list----
// function sideMenuSlide(){
//   let elem = document.querySelector('#sidemenu');
//   let checkNum = elem.getAttribute('class');
//   // document.querySelector('#sidemenu').getAttribute('on');
//   console.log(document.querySelector('#sidemenu').getAttribute('class'));
//
//   if(checkNum == 'on'){//on class가 있을 때
//     //on을 삭제하는 코드
//     elem.classList.remove('on');
//   }else{
//     //on를 추가하는 코드
//     elem.classList.add('on');
//   }
// }



//*존재하다가 사라졌다가 나타나는것 - 토글  (참고 : 토글 클래스 토글 메서드)*
//class list----
function sideMenuSlide(){
  let elem = document.querySelector('#sidemenu');
  let checkNum = elem.getAttribute('class');
  elem.classList.toggle('on');//toggle은 넣었다 뺐다만을 작동하는 것
}
