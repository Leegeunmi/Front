$(function() {
  //https://quantumcode.tistory.com/의 '태그변경'참조
  //script영역 replaceWith() 사용예  --> 태그를 다른 태그로 변경한다.
  $("h2").replaceWith('<h2>remove</h2>');
  console.log($("h2").text());

  //ex 1) p태그를 "<span class='box'>text box</span>"로 replaceWith()사용하여 변경하시오
  $('p').replaceWith('<span class="box">text bax</span>');
  console.log($('.box').text());
  $('.box').remove();

  //ex 2) .items태그를 "<a href='http://naver.com'></a>"로 replaceWith() 사용하여 변경하시오
  //ex 3) 변경된 a태그를 remover()를 사용하여 제거하시오
  $('.items').replaceWith('<a href="http://naver.com"></a>');
  $('a').remove();
});
