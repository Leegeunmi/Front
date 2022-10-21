'use strict'
// < while 구문 >
let travel = ['대구','강릉','전주','제주','가평'];
//대구 ~ 가평 순으로 출력
let count = 0;
while (count < travel.length) { //travel.length = 5  count = 0  (0에서 시작해 5보다 작은 4가 될때 까지 반복한다.-> 5번반복) 
  console.log(travel[count]);
  count++; // for문과 달리 증감연산자를 따로 입력해야한다.
}

//가평 ~ 대구 순으로 출력
let count = travel.length - 1;
while (count >= 0) {
  console.log(travel[count]);
  count--; // for문과 달리 증감연산자를 따로 입력해야한다.
}


//<for문으로 출력하기>
//대구 ~ 가평 순으로 출력
for (let count = 0; count < travel.length; count++) {
  console.log(travel[count]);
}

//가평 ~ 대구 순으로 출력
for (let count = travel.length - 1; count >= 0; count--) {
  console.log(travel[count]);
}
