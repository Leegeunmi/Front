'use strict'

const date = new Date();
let hours = date.getHours();

//조건문
//11시 이전 아침식사, 15시 이전 점심식사, 나머지 저녁식사.
if (hours < 11) {
  alert('아침 먹을 시간입니다.')
}else { // hours < 11은 false이고, hours >= 11은 true일 때,
  if(hours < 15) {
    // hours >=11 이고, hours < 15
    alert('점심 먹을 시간입니다.')
  }else { // hours < 15  hours >= 15 hours <= 24
    alert('저녁 먹을 시간입니다.')
  }
}
