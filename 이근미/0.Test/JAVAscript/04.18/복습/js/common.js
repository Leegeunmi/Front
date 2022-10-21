'use strict'

// function outFunc(x){
//   const y = 5;
//   function innerFunc(z){
//     return x + y + z;
//   }
//   return innerFunc;
// }
//
// let makeAdder10 = new outFunc(10);
// console.log(makeAdder10(2));
//
// let closureFunc = new outFunc(10);
// console.log(typeof(closureFunc));

function makeAdder(x){
  let y = 1;
  return function(z){
    y = 100;
    return x + y + z;
  };
}
let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(2)); //107 x:5  y:100  z:2
console.log(add10(2)); //112
