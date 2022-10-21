'use strict'

//입력한 값을 내림차순으로 더한 값 구하기 ( 10입력 시 1~10 까지 더한 값 출력)
let total = 0;

let inputText = prompt('점수를 입력해주세요.','숫자');
inputText = Number(inputText);

function sumRepeat(i) { //i는 실행할 때만 사용되는 지역변수
  // return ; //내가 출력하고 싶은 값을 입력

  //실행문
  if (i < 1){ //0일때
    return 0; //함수 작동하지 않겠다.
  }
  total += i;
  console.log(total);//과정출력
  i--;
sumRepeat(i);
}

sumRepeat(inputText);
alert(total);
