'use strict'
// 숫자나열
// 변수선언
// (밖에 있는 건 전역변수, 함수 안에 있는 건 지역변수)
let num = ''; //숫자를 담을 변수
let count = 0; //작은 숫자부터 큰숫자까지 개수

function repeat(i, j) { // i는 시작하는 숫자(작은숫자) j는 끝나는 숫자(큰 숫자)
  // 실행코드
  if( count == 0 ) { // 초기실행
    num += i;
  }else if ( i > j ) { // 최대숫자 제한
    return 0; //return false  _그만하고싶어
  }else { // 초기실행이 아니라면 콤마추가
    num += ',' + i;
  }
  i++;
  count++;
  repeat(i,j);
}
repeat(50,80);
console.log(num);
