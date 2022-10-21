$(function() {
  //https://quantumcode.tistory.com/의 'HTML의 이동'표 참조
  //*담는요소 담기는요소 구분하자

  //1)
  // //script영역 prependTo(), appendTo() 사용예
  //prependTo() 다른태그 안의 맨앞으로 이동
  //appendTo() 다른태그 안의 맨뒤로 이동
  //// $('p').append('hello');//-> 기존 prepend나 append할떄
  // $('strong').prependTo('p'); //strong을 p에 이동 $('들어갈요소').appendTo('들어가게될외부요소');
  // $('.items:last-child').prependTo('#wrap'); //마지막 자식요소인 5번이 가장위인 1번위로 올라간다.
  // $('.items:nth-child(3)').appendTo('#wrap'); //items2를 제일 뒤로 보내기
  // console.log($(".items:nth-child(1)").text());
  // console.log($(".items:nth-child(5)").text());
  // console.log($(".items").eq(1).text());


  //2)
  //script영역 insertBefore(), insertAfter() 사용예
  //prependTo() 다른태그 안의 맨앞으로 이동
  //appendTo() 다른태그 안의 맨뒤로 이동
  $("#wrap").insertBefore("p"); //-> #wrap을 p 앞으로 이동

  // items5을 items3바로 앞으로 이동시키기
  $(".items:nth-child(3)").insertBefore(".items:nth-child(5)");
  // strong 태그를 items3바로 뒤로 이동시키기
  $("strong").insertAfter(".items:nth-child(4)");
});
