'use strict'
// Date()생성자
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1; //-> 현재 월단위 0(1월)부터 시작 (월이 0부터 시작하기 때문에 +1 해야한다.)
let dates = date.getDate(); // ~일 (getDay는 요일 0~6)
let minutes = date.getMinutes(); //현재 분단위
let hours = date.getHours();

console.log(date);
console.log(year);
console.log(month);
console.log(dates);
console.log(minutes);
console.log(hours);

//오전 오후 확인 조건문 ------------------------------------------
if ( hours < 12 ) {
  hours -= 12;
  alert(`${year}년 ${month}월 ${dates}일 오전 ${hours}:${minutes}입니다.`);
}else if ( hours > 12 ) {
  alert(`${year}년 ${month}월 ${dates}일 오후 ${hours}:${minutes}입니다.`);
}else {
  alert (`${year}년 ${month}월 ${dates}일 정오입니다.`);
}
