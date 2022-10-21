'use strict'
// < 중첩for문 >

//1) 피라미드 별찍기
// 가장 아래 별 수 : 15
let outPut = '';
for (let i = 0; i < 15; i++) {
  for(let j = 15; j > i; j--) {
    outPut += ' ';
  }
  for(let k = 0; k < 2*i-1; k++){
    outPut += '*';
  }
  outPut +='\n';
}
for (let i = 15; i >= 0; i--) {
  for(let j = 15; j > i; j--) {
    outPut += ' ';
  }
  for(let k = 0; k < 2*i-1; k++){
    outPut += '*';
  }
  outPut +='\n';
}

console.log(outPut);
