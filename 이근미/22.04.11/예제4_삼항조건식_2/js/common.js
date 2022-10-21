'use strict'
//삼항조건식
let num = prompt('숫자를 입력하세요.','숫자');
let absNum = Math.abs(num); //숫자를 절대값으로 반환한다.
console.log(typeof(num)); //string
console.log(typeof(absNum)); //number
console.log(num);
console.log(absNum);

num % 2 == 0 ? alert(num+'은 짝수입니다.') : alert(num+'은 홀수입니다.');
console.log(Math.round(num));
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

//Math.abs() 숫자절대값
//Math.round() 반올림
//Math.ceil() 올림
//Math.floor() 내림

// <시험내용>
// 데이터를 받아 합계 평균을 내고 Math.메서드(반올림,올림,내림)를 활용하여 정리하는것
