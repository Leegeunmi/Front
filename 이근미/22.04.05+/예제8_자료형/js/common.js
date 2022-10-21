//변수선언
console.log('자료형')
// console.log()
// alert()

// console.log(typeof('hello javascript')); //문자형 string
// console.log(typeof('12345')); //문자형 string
// console.log(typeof(12345)); //숫자형 number
// console.log(typeof(true)); //불형 boolean
// console.log(typeof(function(){})); //함수형 function
// console.log(typeof({})); //객체형 object
// console.log(typeof([])); //배열_객체형 object


// 문자열과 조합
// var stringVar = '안녕하세요';
// var numberVar = 10;
// console.log(typeof(numberVar)); //숫자형
//
// var sum = stringVar + numberVar;
// console.log(sum);
// console.log(typeof(sum)); //숫자형이 문자형으로 바뀜


// 숫자를 입력한 문자열과 조합
// var stringVar = "50";
// var numberVar = 10;
// var sum = stringVar + numberVar;
// console.log(sum); //오공일공
// console.log(typeof(sum)); //string
// console.log(sum+10); //오공일공일공


// 숫자형과 숫자형의 조합
var strVar = 50;
var numberVar = 10;
var sum = strVar + numberVar;

console.log(strVar+','+typeof(strVar)); //50,number
console.log(numberVar+','+typeof(numberVar)); //10,number
console.log(sum+','+typeof(sum)); //60,number
