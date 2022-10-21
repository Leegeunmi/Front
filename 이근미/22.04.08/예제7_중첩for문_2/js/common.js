'use strict'
// < 중첩for문 >

//1) 짝수 홀수 구분하여 별찍기
//   i가 홀수일 때 /*  짝수일 때 /** 출력
let outPut = '';
for(let i = 0; i < 10; i++){
  if(i % 2 == 1) {
    outPut += '/*'
    console.log(outPut);
  }else if (i % 2 == 0) {
    outPut += '/**'
    console.log(outPut);
  }
}
