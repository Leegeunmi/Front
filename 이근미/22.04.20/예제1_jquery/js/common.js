'use strict'
$(function(){
  //jquery실행구문 (javascript호환가능)
  // document.querySelector('li').style.color = 'red'; ->javascript

  // 1) id값으로 선택 / class값으로 선택
  // $('li').css('color','red'); //$(지정).css(속성,값)
  // $('#first').css('color','green');
  // $('li.third').css('color','blue');
  // $('li.fourth').css('background','orange');

  //2) 자손선택
  // $('li.second p').css('font-size','10px'); //두번째 li의 span요소에 배경색을 blue로 변경
  // $('li.third span').css('background','skyblue'); //세번째 li의 p요소에 font-size를 10px로 변경

  //3)그룹셀렉터 - 복수선택
  // let num = 30;
  // $('.first, .third, .fourth').css('left', num+'px'); //-> num+'px' == num == `${num}px` 픽셀의 경우 px생략가능

  //ex1) ul 첫번째 li의 자식요소 span에 글자색 red로 변경
  // $('li:first-child span').css('color','red');
  // $('li.second > span').css('color','blue');
  // $('*').css('color','green');//전체요소선택 //모든 색을 green으로 다 덮는데 이코드가 생단으로 올라가면 green으로 먼저 덮고 다음 색상 지정경우 그 색이 위로 올라간다. (절차적으로 실행)

  //ex2) 인접선택자 - ul의 세번째 li요소를 인접선택자를 사용하여 글자색 blue로 변경
  // $('.second + li').css('color','blue');
  //
  // //ex3) 유사클래스
  // $('li:first-child').css('color','firebrick');
  // $('li:last-child').css('color','salmon');
  //
  //
  // //ex4) css다중사용 (methods chain)
  // $('li:last-child').css('color','salmon').css('font-size','30px');

  // //ex5) 동위선택자를 사용한 요소선택
  // $('li.second ~ li').css('color','yellow');

  //ex6) 부정유사클레스를 사용한 요소선택 - 첫번째요소를 제외한 모든요소에 적용하겠다.
  // $('li:not(:first-child)').css('color','red');


  //4)메뉴구조 요소를 선택하고 style을 적용
  // span의 글자색변경 (다양한 방법으로해보기)
  $('span').css('color','orange');
  $('li a p span').css('color','blue');
  // 서브메뉴 내부 요소 span의 글자색변경
  $('.submenu span').css('color','yellow');

  // :empty -> 안에 자식요소가 있냐 없냐
  $('.submenu span:empty').css('background','pink');
})
