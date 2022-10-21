'use strict'
$(function(){
  // script영역---
  // 1---prepend() : 앞에 붙이기
  let elemNum = $('p#first'); //p태그의 id first를 elemNum에 담는다.
  elemNum.prepend('<span>hello</span>');//p태그의 id first안에 span태그로 감싼 hello를 앞에 붇인다.
  // 2---appeend() : 뒤에 붙이기
  elemNum.append('<span>have a good day!</span>');//p태그의 id first안에 span태그로 감싼 have a good day!를 뒤에 붙인다.


  /*
  ex) p태그의 총 개수 3개
  각각의 p태그의 자식요소의 제일 앞쪽에
  '<strong>kind: </strong>'을 for문 사용하여 추가하기
  */
  let pLeng = $('p').length;
  for(let i = 0; i < pLeng; i++){}
});
