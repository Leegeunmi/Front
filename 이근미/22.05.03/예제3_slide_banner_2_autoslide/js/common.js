$(function() {
  //script 영역 slide banner 만들기 예제2
  const widthNum = 150; //li하나의 넓이 / ul.column의 너비를 계산할 수 있다.
  const caInner = $('#carousel-inner');
  //li의 개수 가져오기
  // let liLeng = caInner.find('ul.column li').length;
  let liLeng = $('ul.column li', caInner).length;
  console.log(liLeng);

  // li의 개수로 ul.column의 너비를 설정
  $('ul.column', caInner).css('width', widthNum * liLeng);

  /* 슬라이드 포지션 초기화 ---
     1) ul.column의 마지막 li를 ul.column의 첫번째 자식요소로 이동
     2) ul.column의 초기 슬라이드 위치로 이동 */
  $('ul.column li:last', caInner).prependTo('ul.column', caInner);
  caInner.css('margin-left', -widthNum);


  //prev button script
  $('#carousel-prev').click(function() {
    let caInMarginLeft = parseInt(caInner.css('margin-left')); // -
    caInner.animate({
      marginLeft: caInMarginLeft + widthNum
    }, 'swing', function() {
      $('ul.column li:last', caInner).prependTo('ul.column', caInner);
      caInner.css('margin-left', -widthNum);
    });
  });


  //next button script
  $('#carousel-next').click(function() {
    let caInMarginLeft = parseInt(caInner.css('margin-left'));
    caInner.animate({
      marginLeft: caInMarginLeft - widthNum
    }, 'swing', function() {
      $('ul.column li:first', caInner).appendTo('ul.column', caInner);
      caInner.css('margin-left', -widthNum);
    });
  });

  let timerID = null;
  let auto = function() {
    timerID = setInterval(function() {
      $('#carousel-next').trigger('click');
    }, 1000);
  }
  auto();

  // let timerID = null;
  // function auto(){
  //   timerID = setInterval(function(){
  //     $('#carousel-next').trigger('click');
  //   },3000);
  //   return timerID;
  // }
  // auto();
  // console.log(auto());

  $('#carousel,#carousel-prev,#carousel-next').on({
    mouseenter: function() {
      clearInterval(timerID);
    },
    mouseleave: function() {

      timerID = setInterval(function() {
        $('#carousel-next').trigger('click');
      }, 1000);
    }
  })


}); //document ready
