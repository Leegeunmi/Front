'use strict'
//재귀함수) 예전에 많이 사용함 요즘은 for문

//상품을 입력받고 해당 상품의 재고를 확인하는 프로그램
//1)me---
// let user = prompt('상품을 입력하세요.','상품명');
// let count = 0;
// let item = ['가방', '컴퓨터', '휴대폰'];
//
// //재고확인 함수
// function checkItem() { //함수정의
//   if (user == item[0]) {
//     alert(`검색하신 ${user}는 재고가 있습니다.`);
//     let answer = prompt('구매하시겠습니까? 1.구매 2.취소', '번호입력');
//     if (answer == 1) {
//       alert('구매가 완료 되었습니다.');
//     } else {
//       alert('구매가 취소되었습니다.');
//     }
//   } else if (user == item[1]) {
//     alert(`검색하신 ${user}는 재고가 있습니다.`);
//     let answer = prompt('구매하시겠습니까? 1.구매 2.취소', '번호입력');
//     if (answer == 1) {
//       alert('구매가 완료 되었습니다.');
//     } else {
//       alert('구매가 취소되었습니다.');
//     }
//   } else if (user == item[2]) {
//     alert(`검색하신 ${user}는 재고가 있습니다.`);
//     let answer = prompt('구매하시겠습니까? 1.구매 2.취소', '번호입력');
//     if (answer == 1) {
//       alert('구매가 완료 되었습니다.');
//     } else {
//       alert('구매가 취소되었습니다.');
//     }
//   } else {
//     alert(`검색하신 ${user}는 재고가 없습니다.`);
//   }
// }
// checkItem();


//2)techer---
let user = prompt('상품을 입력하세요.', '상품명');
let item = ['가방', '컴퓨터', '휴대폰'];
let count = 0;

//재고확인 함수
function checkItem() { //함수정의
  if (count < item.length) {
    if (user == item[count]) {
      alert(`${user}는 재고가 있습니다.`);
      let checkBuy = confirm('구매하시겠습니까?');
      if (checkBuy) {
        alert('구매가 완료 되었습니다.')
      } else {
        alert('구매가 취소 되었습니다.')
      }
    }
    count++;
    checkItem()//함수 내 함수를 호출(재귀호출)
  }
}
checkItem()
