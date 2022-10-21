'use strict'
//for of in 구문으로 코드를 간결하게 할 수 있다.

let array = ['사과','배','수박','포도','키위','레몬']; //배열 for _of
let obj = {car:'승용차', phone:'ipone', house:'아파트'}; //객체 for _in
// console.log(array);
// console.log(obj);
// console.log(obj.house);
// console.log(obj['house']);

for(let items of array) {//반복 가능한 객체(interable), 배열도 객체이며  array, set, map등으로
  console.log('for of 구문으로 출력하기:'+items);
}

// for(let items in array) {
//   console.log('for in 구문으로 index 출력하기:'+ items);
//   console.log('for in 구문으로 value 출력하기:'+ array[items]);
// }

// for(let items of obj) {//일반 객체 타입은 interable 하지 않기 떄문에 for of를 사용할 수 없다.
//   console.log('for of 구문으로 출력하기:'+items);
// }

// for(let[key,val]of Object.entries(obj)){//일반객체타입을 interable하게 사용하기
//   console.log('for of 구문으로 출력하기: key:'+key+'  value:'+val);
// }

// for(let items in obj){
//   console.log(typeof(items));
//   console.log('for in 구문으로 index 출력하기:'+items);
//   console.log('for in 구문으로 value 출력하기:'+obj[items]);
//   // console.log('for in 구문으로 value 출력하기:'+obj.items); // -> undefined
// }


// let userMap = new Map();
// userMap.set('test','tttt');
// userMap.set('fruit','lemon');
// userMap.set('car','jeep');
// console.log(userMap);
// console.log(userMap.has('test'));
//
// // for(let items of userMap){
// //   console.log(items);
// // }
//
// if (userMap.has('test')){
//   console.log('test는 존재합니다.');
//   console.log(userMap.get('test'));
//   console.log(userMap.size);
// }

let map = new Map();
map.set('a','A');
map.set('b','B');
console.log(map);
console.log(map.has('test'));
