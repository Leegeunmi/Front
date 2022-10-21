'use strict'
// < 중첩for문 >

// 다중배열 or 다차원배열
// 1)-------------------------------------------------
// let array = [['가','나','다'],'b',['A','B','C']];
// console.log(array);
// console.log(array[0]);
// console.log(array[0][2]);
// console.log(array[2][0]);
//
// for (let i = 0; i< 10; i++){
//   console.log(i);
//   for (let j = 0; j < 5; j++){
//     console.log(`중첩for ${j}`);
//   }
// }
//
// // console.log(array[2].length);
//
//
// 2) for 중첩문을 이용해 반바지, 스니커즈, 백팩 출력하기 [1][0] / [4][1] / [5][0]
// let items = [['티셔츠', '자켓'],['반바지', '청바지'],['코트', '패딩'],['워커', '스니커즈'],['백팩', '크로스백', '토트백']]
// // // (me)---
// for (let i = 0; i < items.length; i++){
//   for (let j = 0; j < items[i].length; j++){
//     if (i == 1 && j == 0){
//       console.log(items[i][j]);
//     }
//     if (i == 3 && j == 1){
//       console.log(items[i][j]);
//     }
//     if (i == 4 && j == 0){
//       console.log(items[i][j]);
//     }
//   }
// }

//(techer)---
let items = [['티셔츠', '자켓'],['반바지', '청바지'],['코트', '패딩'],['워커', '스니커즈'],['백팩', '크로스백', '토트백']]
let itLeng = items.length;
for (let i = 0; i < itLeng; i++) {
  if (i == 1) {
    outputItems(i,0);
  } else if (i == 3) {
    outputItems(i,1);
  } else if (i == 4) {
    outputItems(i,0);
  }
}
//items 가져오기 함수 만들기
function outputItems(currentArray,checkIndex){
  for (let j = 0; j < items[currentArray].length; j++){
    if (j == 0){
      console.log(items[currentArray][j]);
    }
  }
}
