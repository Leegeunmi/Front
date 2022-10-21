'use strict'
//split 사용
let num = '1,2,3,4,5';
console.log(num);
console.log(num.split(','));
let array = num.split(',');
console.log(array[1]);

let chatText_1 = "How are you doing today?";
let chatText_2 = "Let's go lunch!";
let chatText_3 = "I am a boy!";
let chatText_4 = "Good luck man!";

// let str = chatText_1.split('a'); // a 빼기
// console.log(str);

let str = chatText_1.split('a', 2); //a는 빠지고 a를 기준으로 2개 배열로 자르기
console.log(str);

// let ctStr.push(chatText_2.split(' ')); //띄워쓰기 마다 자르기

// let ctStr = [];
// ctStr.push(chatText_1.split(' '));
// ctStr.push(chatText_2.split(' '));
// ctStr.push(chatText_3.split(' '));
// ctStr.push(chatText_4.split(' '));
// console.log(ctStr);

let ctStr_1 = chatText_1.split(' ');
let ctStr_2 = chatText_2.split(' ');
let ctStr_3 = chatText_3.split(' ');
let ctStr_4 = chatText_4.split(' ');
console.log(ctStr_2);
console.log(`${ctStr_1[0][2]} ${ctStr_2[2][2]} ${ctStr_3[0][2]} ${ctStr_4[0][2]}`);
