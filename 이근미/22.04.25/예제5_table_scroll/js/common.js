$(function() {
  // script영역 table scroll 생성시 스크롤바 수정 예
  $(window).on('load resize',function(){
    //실행구문 영역 -onload되었을때 이 실행문 영역을 실행한다.
    let scrollBarWitdh = $('.tbl-content').outerWidth() - $('.tbl-content table').outerWidth();
    console.log(`table parent width: ${$('.tbl-content').width()},table width: ${$('.tbl-content table').width()}`);//number값으로 반환
    console.log(scrollBarWitdh);
    $('.tbl-header').css('padding-right',scrollBarWitdh);
  }).resize();

});
