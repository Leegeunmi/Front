$(function() {
  //script 영역 slide banner 만들기 예제2
  const widthNum = 150; //li하나의 넓이 / ul.column의 너비를 계산할 수 있다.
  const caInner = $('#carousel-inner');
  //li의 개수 가져오기
  // let liLeng = caInner.find('ul.column li').length;
  let liLeng = $('ul.column li', column).length;
  console.log(liLeng);

  // li의 개수로 ul.column의 너비를 설정
  $('ul.column', caInner).css('width', widthNum * liLeng);

  /* 슬라이드 포지션 초기화 ---
     1) ul.column의 마지막 li를 ul.column의 첫번째 자식요소로 이동
     2) ul.column의 초기 슬라이드 위치로 이동 */
  function initialFunc(init) {
    caInner.css('margin-left', -widthNum);
    if (init == 'prev') {
      $('ul.column li:last', caInner).prependTo('ul.column', caInner);
    } else {
      $('ul.column li:first', caInner).appendTo('ul.column', caInner);
    }
  }

  initialFunc('prev');


  function actionBtn(el) {
    el.click(function() {})
  }

  $('.button').each(function() {
    actionBtn($(this));
  });

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
    let caInMarginLeft = parseInt($('#carousel-inner').css('margin-left'));
    $('#carousel-inner').animate({
      marginLeft: caInMarginLeft - widthNum
    }, 'swing', function() {
      $('#carousel-inner ul.column li:first').appendTo('#carousel-inner ul.column');
      $('#carousel-inner').css('margin-left', -widthNum);
    });
  });



  //next button script
  $('#carousel-next').click(function() {
    let caInMarginLeft = parseInt(caInner.css('margin-left'));
    let isAni = caInner.is(':animated');
    if (!isAni) {
      if (el.attr('id') === 'carousel-prev') {
        caInner.animate({
          marginLeft: caInMarginLeft + widthNum
        }, 'swing', function() {
          $('ul.column li:last', caInner).prependTo('ul.column', caInner);
          caInner.css('margin-left', -widthNum);
          initialFunc('prev');
        });
      } else {
        caInner.animate({
          marginLeft: caInMarginLeft - widthNum
        }, 'swing', function() {
          $('ul.column li:first', caInner).appendTo('ul.column', caInner);
          caInner.css('margin-left', -widthNum);
          initialFunc('prev');
        });
      }
    }
  });

}); //document ready
