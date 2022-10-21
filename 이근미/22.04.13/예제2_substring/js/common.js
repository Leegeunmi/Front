'use strict'
//substing 사용
let a = '1234567890';
let ab = a.substring(2,5); // ( 2번째 자리부터 5번째 앞까지 )
// let abc = a.substring(5,2); // 두 숫자 중 작은 수가 시작인덱스 큰 수는 종료인덱스
console.log(ab);// 345
let abc = a.substring(-5);//음수 인식x -> 전체 수 출력
// let abc = a.substring(0);//전체 수 출력
console.log(abc);


//string()메서드 사용하여 'hi'값 console.log();출력하기
let stringText = 'hello this is string';
console.log(`${stringText.substring(0,1)}${stringText.substring(8,9)}`);

//string()메서드 사용하여 '나이: 20세, 이름: 홍길동, 지역: 대구'값 console.log();출력하기
let infoText = '안녕하세요. 저는 대구에 사는 홍길동입니다. 나이는 20세 입니다.';
let city = infoText.substring(10,12);//대구
let name = infoText.substring(17,20);//홍길동
let age = infoText.substring(29,31);//20
console.log(`나이:${age}, 이름:${name}, 지역:${city}`);
