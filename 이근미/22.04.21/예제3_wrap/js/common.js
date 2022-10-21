$(function() {
  //https://quantumcode.tistory.com/의 '다른태그로묶음'표 참조
  //*담는요소 담기는요소 구분하자

  //1)
  //script영역 wrap(), wrapAll(), wrapInner() 사용예
  //wrap() 특정태그를 지정한 태그로 감싸는 method
  // $("strong").wrap("<h2></h2>");//h2로 strong을 하나씩 감싼다. -> 선택한 요소를 개별로 감싼다.
  //$("h2").wrapAll("<header></header>");//h2모두를 한번에 header로 감싼다. -> 선택한 요소들을 모아 전체를 감싼다.

  /*
  ex)
  menu클래스 태그의 자식 요소 span을 선택하고
  "<a href='http://naver.com' target=''></a>"로 감싸시오.
  */
  // $(".menu ul li span").wrap("<a href='http://naver.com' target=''></a>");

  //wrapAll의 주의사항 : 선택한 모든 요소를 가지고 와서 감싸는 메서드이며
  //웹페이지 전체에 영향을 줄 수 있으므로 선택 시 구조를 명확히 하는 것이 필요하다.(부모 자식 (특정영역에 대한 정확한지정))
  //("span").wrapAll("<header></header>");//-> 다른것까지 끌고와서 레이아웃이 깨진다.


  //2)
  // wrapAll()
  //ex.1) .wrap-all의 요소에 있는 p태그를 .item-wrap 클래스 갖고 있는 div태그로 wrapAll메서드를 사용해여 감싸시오.
  //ex.2) .wrap-all의 요소에 있는 span태그를 .span-wrap 클래스 갖고 있는 div태그로 wrapAll메서드를 사용해여 감싸시오.
  //ex.3) .wrap-all의 요소에 있는 .items태그들을 .div-items-wrap 클래스 갖고 있는 div태그로 wrapAll메서드를 사용해여 감싸시오.
  //ex.4) strong태그들을 .title 클래스 갖고 있는 div태그로 wrapAll메서드를 사용해여 감싸시오.
  $('.wrap-all p').wrapAll('<div class="item-wrap"></div>');
  $('.wrap-all span').wrapAll('<div class="span-wrap"></div>');
  $('.wrap-all .items').wrapAll('<div class="div-items-wrap"></div>');
  $('strong').wrapAll('<div class="title"></div>');


  //3)
  //wrapInner()
  // wrapInner method사용 시 선택한 요소의 자식요소 모두를 특정태그로 감싼다.
  $(".wrap-inner").wrapInner("<div class='inner'></div>");

  //ex).wrap-inner의 요소에 있는 .items의 자식요소들을 wrapInner를 사용하여 "<a href=http://daum.net></a>"로 감싸시오.
  $('.wrap-inner .items').wrapInner('<a href=http://daum.net></a>');
});
