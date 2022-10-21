'use strict'
//배열에 있는 값만 뽑아낼 때 forEach문 좋다..

// let array = new Array();
// array.push('사과','배','포도');
// console.log(array);

//--------------------------------------------------------------


let array = [['사과','배','포도'],['컴퓨터'],['텀블러','접시']]

//기존 for문 ---
// for (var i = 0; i < array.length; i++){
//   for (var j = 0; j < array[i].length; j++){
//     array[i][j]
//   }
// }

// forEach문 ---
// array.forEach(function(i){
//   i.forEach(function(j){
//     console.log(j);
//   });
// });


// array.forEach(function(i){
//   console.log(i);
//   i.forEach(function(j){
//     console.log(j);
//   });
// });

// array.forEach((array, i) => {
//   console.log(i);
// });
