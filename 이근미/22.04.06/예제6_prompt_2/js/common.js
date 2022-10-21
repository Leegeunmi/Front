'use strict'
//number string prompt test
// const num = 10; //10 고정
// let inputText = prompt('숫자를 입력해주세요.','숫자') // ,를 주고 벨류값을 줄 수 있다.
// console.log(typeof(inputText)); // -> string
// console.log(num + inputText); // -> 1010
//
// // let changeNumber = Number(inputText);// -> string을 number로 변환
// // console.log(num + changeNumber);// -> 20
// console.log(num + Number(inputText)); // -> string을 number로 변환하니 20


// 반지름 입력값에 따라 원의 둘레 구하기
//(재료준비)
const pi = 3.14159265;
let circle = null; //원의 둘레값
let radiusNum = prompt('원의 둘레 구하기','반지름을 입력해주세요.(숫자)');
radiusNum = Number(radiusNum);
// console.log(`입력한 반지름 : ${radiusNum}, 데이터타입 : ${typeof(radiusNum)}`);

//둘레구하는 영역 (로직구현영역)
circle = 2*pi*radiusNum;

//(아웃풋)
alert(`반지름은 ${radiusNum}cm이고, 원의 둘레는 ${circle}cm입니다.`);
