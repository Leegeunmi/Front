'use strict'
// if(조건문){
//   실행문
// }

// if(점심시간 == true){
//   밥을 먹는다.
// }else if{
//   집으로 간다.
// }else {
//   잠을 잔다.
// }


//confirm test
let inputText = confirm('회원가입을 하시겠습니까?'); //-> 확인을 누르면 true 취소를 누르면 false가 반환
console.log(typeof(inputText));
if( inputText ) {
  alert('회원가입이 완료 되었습니다.');
}else {
  alert('회원가입이 취소 되었습니다.');
}
// if(inputText == true) {
//   alert('회원가입이 완료 되었습니다.');
// }else if(inputText == false){
//   alert('회원가입이 취소 되었습니다.')
// }
