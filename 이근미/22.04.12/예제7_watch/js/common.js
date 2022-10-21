'use strict'
//live watch
// (function(){}());//-즉시실행함수로 변경가능(해보기) 아래는 선언적 함수사용
let t = null;
function startTime(){
  let today = new Date();//날짜 생성자;
  let h = today.getHours();//시간
  let m = today.getMinutes();//분
  let s = today.getSeconds();//초
  // console.log(`${h}:${m}:${s}`);

  //--한자리 수일 때 앞에 0넣기--//
  //1)----
  // document.getElementById('txt').innerHTML = `${h}:${m}:${s}`;
  // if (h < 10){
  //   document.getElementById('txt').innerHTML = `0${h}:${m}:${s}`;
  // }
  // if (m < 10){
  //   document.getElementById('txt').innerHTML = `${h}:0${m}:${s}`;
  // }
  // if (s < 10){
  //   document.getElementById('txt').innerHTML = `${h}:${m}:0${s}`;
  // }

  //2)-----
  // document.getElementById('txt').innerHTML = `${h < 10 ? `0${h}`:h}:${m < 10 ? `0${m}`:m}:${s < 10 ? `0${s}`:s}`;

//3)-----
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  function checkTime(i){//일의 자리에 '0'을 포함시키는 함수
    if(i < 10){
      i = '0' + i;
    }
    return i;
  }

  //구간설정//
  if(h == 16 && m > 49){
    document.getElementById('txt').innerHTML = `${h}:${m}:${s}<br>7교시 종료! 쉬는 시간!( °̥̥̥̥̥̥̥̥◡͐°̥̥̥̥̥̥̥̥)`;
  }else if (h == 17 && m < 44) {
    document.getElementById('txt').innerHTML = `${h}:${m}:${s}<br>8교시 시작!༼ ◔ ͜ʖ ◔ ༽`;
  }else if(h == 17 && m == 45){
    document.getElementById('txt').innerHTML = '5분 뒤⎝㋡⎠';
  }else{
    document.getElementById('txt').innerHTML = `${h}:${m}:${s}`;
  }
  t = setTimeout(startTime, 1000);
}
startTime();
