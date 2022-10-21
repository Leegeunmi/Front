// 'use strict'
// let count = 0; //숫자카운트를 담는 변수
// let t = null; //setTimeout을 담는 변수
// let timmerIsOn = 0; //setTimeout의 진행여부 확인하는 변수
//
// //setTimeout 실행함수
// function timeCount(){
//   console.log('this is timeCount');
// }
//
// //timeCount 함수를 실행시키는 함수
// function startCount(){ //
//   console.log('this is startcount');
//   timeCount();
// }
//-------------------------------------------------------------------시작 틀


//1) 초
'use strict'
let count = 0; //숫자카운트를 담는 변수
let t = null; //setTimeout을 담는 변수
let timmerIsOn = 0; //setTimeout의 진행여부 확인하는 변수

//setTimeout 실행함수
function timeCount(){//1초마다 한번 씩 count를 증가 시키는
  document.getElementById('stop-watch').innerHTML = count;//메인창에 카운트 작동되게 하기
  count += 1;
  console.log(count);
  t = setTimeout(timeCount,1000);//1초마다
}

function startCount(){// timeCount 함수를 실행시키는 함수
  if(timmerIsOn == 0){// timmerIsOn != 1
    timmerIsOn = 1; // 0(false)일 때 실행하는데 1(true)를 실행해야하니 자동하지 않는다.
    timeCount();
  }
}

function stopCount(){
  clearTimeout(t);
  timmerIsOn = 0;
  console.log('setTimeout이 정지되었습니다.');
}

function resetCount(){
  clearTimeout(t);
  timmerIsOn = 0;
  count = 0;
  document.getElementById('stop-watch').innerHTML = count;
}



//2) 분 초
// 'use strict'
// let count = 0; //숫자카운트를 담는 변수
// let min = 0;
// let t = null; //setTimeout을 담는 변수
// let timmerIsOn = 0; //setTimeout의 진행여부 확인하는 변수
//
// //setTimeout 실행함수
// function timeCount() { //1초마다 한번 씩 count를 증가 시키는
//   if ( > ) {
//     document.getElementById('stop-watch').innerHTML = `${m}분${count}초`;
//   } else {
//     document.getElementById('stop-watch').innerHTML = `${count}초`; //메인창에 카운트 작동되게 하기
//   }
//   count += 1;
//   if (count == 60) {
//     m += 1;
//     count = 1;
//   }
//   console.log(count);
//   t = setTimeout(timeCount, 1000); //1초마다
// }
//
// function startCount() { // timeCount 함수를 실행시키는 함수
//   if (timmerIsOn == 0) { // timmerIsOn != 1
//     timmerIsOn = 1;
//     timeCount();
//   }
// }
//
// function stopCount() {
//   clearTimeout(t);
//   timmerIsOn = 0;
//   console.log('setTimeout이 정지되었습니다.');
// }
//
// function resetCount() {
//   clearTimeout(t);
//   timmerIsOn = 0;
//   count = 0;
//   document.getElementById('stop-watch').innerHTML = count;
// }
