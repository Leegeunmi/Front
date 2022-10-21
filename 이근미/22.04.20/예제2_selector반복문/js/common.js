$(function() {
  //jquery 실행구문

  //1)
  // for (var i = 1; i < 5; i++) {
  //   if (i == 1) {
  //     $('li:nth-child(' + i + ')').css('color', 'orange');
  //     // == $('li:nth-chid(1)')
  //   } else if (i == 2) {
  //     $('li:nth-child(' + i + ')').css('color', 'skyblue');
  //   } else if (i == 3) {
  //     $('li:nth-child(' + i + ')').css('color', 'red');
  //   }else {
  //     $('li:nth-child('+i+')').css('color','green');
  //   }
  // }
  // //위의 코드는 아래의 코드와 같은 결과가 나온다.
  // $('li:nth-child(1)').css('color','orange');
  // $('li:nth-child(2)').css('color','skyblue');
  // $('li:nth-child(3)').css('color','red');
  // $('li:nth-child(4)').css('color','green');


  //2)
  // 속성선택자
  // $('[class] a').css('color','red'); //해당 속성을 갖고 있는 모든 요소 선택

  // $('ul li[title = "fourth"] a').css('color','blue'); //특정속성이 지정한 값을 가진 태크의 글자색 바꾸기
  // $('ul li[title != "fourth"] a').css('color','green');//특정속성이 지정한 값을 갖지 않은 태크의 글자색 바꾸기 //선택한 특정 태그 및 요소를 제외한 나머지 요소를 선택 (:not()부정유사클래스와 유사)


  /*
  ex)
  1.'s'문자로 시작하는 title 속성을 갖고 있는 요소의 a태그 글자색 red로 변경
  2.'rd'문자로 끝나는 title 속성을 갖고 있는 요소의 a태그 글자색 blue로 변경
  3.'com'문자로 끝나는 href 속성을 갖고 있는 요소의 글자색 yellow로 변경
  4.'net'문자로 끝나는 href 속성을 갖고 있는 요소의 글자색 PaleVioletRed로 변경
  5.'th'문자를 포함한 title 속성을 갖고 있는 요소의 a태그 글자색 green으로 변경

  $('[속성^=값]') 지정값으로 시작하는 태그
  $('[속성$=값]') 지정한값으로 끝나는 태그
  $('[속성*=값]') 지정한값을 포함하는 태그
  */
  $('[title ^= s] a').css('color','red');
  $('[title $= rd] a').css('color','blue');
  $('[href $= com]').css('color','yellow');
  $('[href $= net]').css('color','PaleVioletRed');
  $('[title *= th] a').css('color','green');

  $('[title = ""]').css('','')
});
