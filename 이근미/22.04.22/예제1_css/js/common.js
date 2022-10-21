$(function() {
  //script영역 css() 사용해서 구현 - 3가지 방법
  //방법1)
  // $('.box').css('width','300px');
  // $('.box').css('height','300px');
  // $('.box').css('border','5px solid blue');

  //방법2)-(체이닝 방법)
  // $('.box').css('width','300px').css('height','300px').css('border','5px solid blue');

  //방법3)-(객체방법)
  $('.box').css({'width':'300px','height':'300px','border':'5px solid blue'});
});
