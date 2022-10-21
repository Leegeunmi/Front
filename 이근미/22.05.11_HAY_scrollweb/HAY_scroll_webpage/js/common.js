'use strict'
$(function(){
  // let windowHeight = $(window).innerHeight();
  // console.log(windowHeight);
  // let direction = 0;
  // let maxDirection = $('#wrap section').length - 1;
  // let wheelAction = false;
  // function wheelMove() {
  //   $('html').animate({scrollTop: direction*windowHeight},
  //     {duration: 1000,
  //       start: function(){
  //         wheelAction = true;
  //       },
  //       complete: function(){
  //         wheelAction = false;
  //       }
  //     });
  //   }
  //   wheelMove();
  //
  // $(window).on('wheel',function(event){
  //   let eventDelta = event.originalEvent.wheelDelta;
  //   if(eventDelta > 0 && wheelAction == false){
  //     if(direction <= 0){
  //       direction = 0;
  //     }else {
  //       direction--;
  //       wheelMove();
  //     }
  //   }else if(eventDelta < 0 && wheelAction == false){
  //     if(direction >= windowHeight){
  //       // direction = maxDirection;
  //       direction++;
  //       console.log(direction);
  //     }else {
  //       direction++;
  //       console.log(direction);
  //       wheelMove();
  //     }
  //   }
  // });



  const intervalNum = 150;
  //script 입력 영역
  $('nav ul li a,.back-to-top a, a.button, #footer ul li a').click(function(){
    // console.log(this.hash);
    let thisHash = $(this.hash);
    //---이동하다가 멈출수 있게하는 2가지 방법
    // let isAni = $('html,body').is(':animated'); //1)- 애니메이션이 작동될때 여러번 클릭방지
    // if(!isAni){
    //   $('html,body').animate({scrollTop: thisHash.offset().top},1500);
    // }
    $('html,body').stop();//2)- 즉시 scroll 대상 변경
    $('html,body').animate({scrollTop: thisHash.offset().top},1500);//gnb메뉴를 누르면 선택한 화면으로 이동
    return false;
  });

  /*실습
  back-to-top요소(scroll 상단 이동버튼)가
  window scroll top값이 0이 아닐때 on class를 추가하여 노출 시키기
  (window scrill top값이 0일 때는 on class 삭제)*/
  $(window).scroll(function(){
    // console.log($(this).scrollTop());
    let backToTop = $('.back-to-top');
    if($(this).scrollTop() == 0){
      backToTop.removeClass('on');
    }else {
      backToTop.addClass('on');
    }
  });

  /*실습
  section offset method를 사용하여 window가 스크롤될때
  해당 section의 offset top과 window scrollTop이 같고
  section의 높이와 동일한 영역 안일때 해당 section에
  active class를 추가하시오.*/
  let winHeight = $(window).height();
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();
    // console.log(thisScrollTop);
    $('section').each(function(){
      let thisElem = $(this);
      let thisOffset = $(this).offset();
      // console.log(thisOffset);
      if(thisOffset.top <= thisScrollTop + intervalNum && thisScrollTop <= thisOffset.top + winHeight ){
        thisElem.addClass('active');
        // console.log(thisOffset.top);
        if (thisScrollTop <= 800) {
          $('#gnb ul li a').css('color','beige');
          $('#top-logo a').css('color','beige');
        }else {
          $('#gnb ul li a').css('color','red');
          $('#top-logo a').css('color','red');
        }
      }
      // else {
      //   thisElem.removeClass('active'); //스크롤 지나간 영역 active해제 할때사용
      // }
    });
  });



  $(window).scroll(function(){
    let winHeight = $(this).height(); //window창의 높이를 가져온다.
    let thisScrollTop = $(this).scrollTop(); //window창의 scroll top값을 가져온다.

    $('#gnb ul li a').each(function(){
      let thisOffset = $(this).offset();
      // // console.log(winHeight);
      // // console.log(thisScrollTop);
      // console.log(thisOffset);

      if(thisOffset.top <= thisScrollTop && thisScrollTop < thisOffset.top + winHeight){

        let bodyBgColor = $(this).data('background');
        $(this).css('background-color',bodyBgColor);
      }
    });
  });
});
