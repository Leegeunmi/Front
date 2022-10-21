'use strict'
//substr 사용
let namestr = ['박길동','홍길동','이길동'];
let str = 'hello javascript';//string (문자열)
let strNum = '20200413';
let numberText = '1234567890';
console.log(str[2]);
console.log(str[5]);
console.log(str.length);//공백도 배열값으로 인식
console.log(numberText.substr(1,1)); //1,1 : 1번째자리,1개
let ntNum = numberText.substr(1,1);
console.log(ntNum);
console.log(str.substr(0));//전체 배열 출력

console.log(`오늘은 ${strNum.substr(6,2)}일입니다.\n저는 ${namestr[0]} \n나이는 ${numberText.substr(1,2)}세입니다.`);
let day = strNum.substr(6,2);
let name = namestr[0];
let age = numberText.substr(1,2);
console.log(`오늘은 ${day}일입니다.\n저는 ${name} \n나이는 ${age}세입니다.`);
