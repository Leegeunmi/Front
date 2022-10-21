'use strict' //정확한 규칙을 기반으로 엄격히 관리하겠다. (일종의 보안장치) 잘못된 것을 알려줌
            //실무에서 중간에 투입되었을 때 애초에 use strict 되어 있으면  연달아 사용하고, 아니라면 쓰지 않는다.

// var, let, const test
//var : 재선언(o) 재할당(o)
var numVar; //변수선언
numVar = 10; //변수값 할당 및 초기회
console.log(numVar);
var numVar; //재선언
console.log(numVar);


//let : 재선언(x) 재할당(o)
let numLet; //변수선언
numLet = 20; //변수값 할당 및 초기화
console.log(numLet);
// let numLet; //재선언 불가 - 이미 정의되어 있다는 오류메세지가 뜸
numLet = 30;
console.log(numLet);


//const : 재선언(o) 재할당(x) (ex,고객정보,id,pw...등 고정값 사용할 때)
const numConst = 50; //변수선언 및 할당 / 선언과 동시에 변수의 값을 초기화 시켜야한다.
console.log(numConst);
// const numConst;
// console.log(numConst); -> 오류
// const numConst = 50;
// numConst = 100; -> 오류


var num1 = 0;
console.log(num1);
var num1 = 1;
console.log(num1);
// let num1 = 2;
// console.log(num1); - 오류
let num2 = 2;
console.log(num2);
num2 = 3;
console.log(num2);
const num3 = 4;
console.log(num3);
const num4 = 5;
console.log(num4);
// const num4 = 6;
// console.log(num4); - 오류
const num5 = 6;
console.log(num5);
