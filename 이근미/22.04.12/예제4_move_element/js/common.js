'use strict'
// setInterval(function(){},1000);//1초마다 바로 실행
// setInterval(function(){
//   console.log('test');
// },1000);


//--move element
function moveElem(){
  let pos = 0;
  let elem = document.getElementById('animate');
  let id = setInterval(frame, 5);
  // setInterval(frame,10);
  function frame(){
    pos++;
    console.log(elem);
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';
  }
}
