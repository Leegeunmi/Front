// $(function() {
//   //script영역 slide banner만들기 예제1
//   const widthNum = 620; //slide개별의 너비, carousel-inner의 너비를 계산할 수있다.
//
//   //ul의 개수 가져오기
//   let ulLeng = $('#carousel-inner ul.column').length;
//   console.log(ulLeng);
//
//   //ul개수로 #carousel-inner 초기 너비설정
//   // $('#carousel-inner').css('width',widthNum*ulLeng);
//   $('#carousel-inner').width(widthNum * ulLeng);
//   console.log(widthNum * ulLeng);
//
//   //슬라이드 포지션 초기화
//   $('#carousel-inner ul.column:last').prependTo('#carousel-inner');
//   $('#carousel-inner').css('margin-left', -widthNum);
//
//   // prev button script
//   $('#carousel-prev').click(function() {
//     let caInMarginLeft = parseInt($('#carousel-inner').css('margin-left'));
//     console.log(caInMarginLeft);
//     $('#carousel-prev, #carousel-next').hide();
//     $('#carousel-inner').animate({
//       marginLeft: caInMarginLeft + widthNum
//     }, 'slow', 'swing', function() {
//       // animation실행이 끝난 직후 실행 영역
//       $('#carousel-inner ul.column:last').prependTo('#carousel-inner');
//       $('#carousel-inner').css('margin-left', -widthNum);
//       $('#carousel-prev,#carousel-next').show();
//     });
//   });
//
//   $('#carousel-next').click(function() {
//     let caInMarginLeft = parseInt($('#carousel-inner').css('margin-left'));
//     console.log(caInMarginLeft);
//     $('#carousel-prev, #carousel-next').hide();
//     $('#carousel-inner').animate({
//       marginLeft: caInMarginLeft - widthNum
//     }, 'slow', 'swing', function() {
//       // animation실행이 끝난 직후 실행 영역
//       $('#carousel-inner ul.column:first').appendTo('#carousel-inner');
//       $('#carousel-inner').css('margin-left', -widthNum);
//       $('#carousel-prev,#carousel-next').show();
//     });
//   });
//
//
// }); //document ready
//
//
//








//리팩토링----

// $(function() {
//   //script영역 slide banner만들기 예제1
//   const widthNum = 620; //slide개별의 너비, carousel-inner의 너비를 계산할 수있다.
//
//   //ul의 개수 가져오기
//   let ulLeng = $('#carousel-inner ul.column').length;
//   console.log(ulLeng);
//
//   //ul개수로 #carousel-inner 초기 너비설정
//   // $('#carousel-inner').css('width',widthNum*ulLeng);
//   $('#carousel-inner').width(widthNum * ulLeng);
//   console.log(widthNum * ulLeng);
//
//   //슬라이드 포지션 초기화
//   initialFunc('prev');
//
//   //슬라이드 포지션 초기화 함수
//   function initialFunc(init){
//     $('#carousel-inner').css('margin-left', -widthNum);
//     if(init === 'prev'){
//       $('#carousel-inner ul.column:last').prependTo('#carousel-inner');
//     }else if(init === 'next'){
//       $('#carousel-inner ul.column:first').appendTo('#carousel-inner');
//     }
//   }
//
//   // prev button script
//   $('#carousel-prev').click(function() {
//     let caInMarginLeft = parseInt($('#carousel-inner').css('margin-left'));
//     console.log(caInMarginLeft);
//     $('#carousel-prev, #carousel-next').hide();
//     $('#carousel-inner').animate({
//       marginLeft: caInMarginLeft + widthNum
//     }, 'slow', 'swing', function() {
//       // animation실행이 끝난 직후 실행 영역
//       initialFunc('prev');
//       $('#carousel-prev,#carousel-next').show();
//     });
//   });
//
//   $('#carousel-next').click(function() {
//     let caInMarginLeft = parseInt($('#carousel-inner').css('margin-left'));
//     console.log(caInMarginLeft);
//     $('#carousel-prev, #carousel-next').hide();
//     $('#carousel-inner').animate({
//       marginLeft: caInMarginLeft - widthNum
//     }, 'slow', 'swing', function() {
//       // animation실행이 끝난 직후 실행 영역
//       initialFunc('next');
//       $('#carousel-prev,#carousel-next').show();
//     });
//   });
//
//
// }); //document ready









//리팩토링----
//---prev, next button script를 하나의 함수로 구현

$(function() {
  //script영역 slide banner만들기 예제1
  const widthNum = 620; //slide개별의 너비, carousel-inner의 너비를 계산할 수있다.

  //ul의 개수 가져오기
  let ulLeng = $('#carousel-inner ul.column').length;

  //ul개수로 #carousel-inner 초기 너비설정
  // $('#carousel-inner').css('width',widthNum*ulLeng);
  $('#carousel-inner').width(widthNum * ulLeng);

  //슬라이드 포지션 초기화
  initialFunc('prev');

  //슬라이드 포지션 초기화 함수
  function initialFunc(init) {
    $('#carousel-inner').css('margin-left', -widthNum);
    if (init === 'prev') {
      $('#carousel-inner ul.column:last').prependTo('#carousel-inner');
    } else if (init === 'next') {
      $('#carousel-inner ul.column:first').appendTo('#carousel-inner');
    }
  }

  // prev button script


  function actionBtn(el) { //버튼클릭 함수선언
    el.click(function() {
      let caroInner = $('#carousel-inner');
      let caInMarginLeft = parseInt(caroInner.css('margin-left'));
      let isAni = caroInner.is(':animated');
      if (!isAni) {
        if (el.attr('id') === "carousel-prev") {
          caroInner.animate({
            marginLeft: caInMarginLeft + widthNum
          }, 'slow', 'swing', function() {
            initialFunc('prev');
          });
        } else {
          caroInner.animate({
            marginLeft: caInMarginLeft - widthNum
          }, 'slow', 'swing', function() {
            initialFunc('next');
          });
        }
      }
    });
  }
  $('.button').each(function() {
    actionBtn($(this)) //버튼클릭 함수실행
  });

//auto slide---
let timerID = null;
let auto = function(){
  timerID = setInterval(function(){
    // console.log('slide!');
    $('#carousel-next').trigger('click');
  },1000);
}
auto();
console.log(timerID);



// $('#carousel,#carousel-prev,#carousel-next').mouseenter(function(){
//   clearInterval(timerID);
// }).mouseleave(function(){
//   timerID = setInterval(function(){
//     $('#carousel-next').trigger('click');
//   },1000);
//   console.log(timerID);
// });


// //위 내용을 on메서드로 바꿔보기-----
// $('#carousel,#carousel-prev,#carousel-next').on({
//   mouseenter:function(){
//     clearInterval(timerID);
//   },
//   mouseleave:function(){
//     timerID = setInterval(function(){
//       $('#carousel-next').trigger('click');
//     },1000);
//   }
// });

}); //document ready
