//같은 결과값 2가지 방식으로 해보기

// $(function() {
//   $('#navi a').click(function(){
//     let imgSrc = $(this).attr('href');
//     console.log(imgSrc);
//     return false;
//   });
// }); //document ready


//방법 1)---animate 작동시키면서 점차 변하게
//1-1)
// $(function() {
//   $('#navi a').click(function(){
//     let imgSrc = $(this).attr('href');
//     let checkAni = $('#main img:last').is(':animated');
//     console.log(checkAni);
//     $('#main img').before(`<img src="${imgSrc}">`);
//     $('#main img:last').animate({opacity: 0},{
//       duration: 1000,
//       easing: 'swing',
//       complete: function(){//애니메이션이 끝나는 즉시 실행
//         $(this).remove()
//       }
//     });
//     return false;
//   });
// });
//



//1-2)
// $(function() {
//   $('#navi a').click(function() {
//     let imgSrc = $(this).attr('href');
//     let checkAni = $('#main img:last').is(':animated');
//     console.log(checkAni);
//     if (checkAni) { //다른 이미지를 누르고 (1초가 흐르는 동안) 다른이미지 누르면 그 즉시 바뀜
//       $('#main img:last').stop().css('opcity', 0);
//       $('#main img:last').remove();
//       $('#main img').attr('src',imgSrc);
//     } else {
//       $('#main img').before(`<img src="${imgSrc}">`);
//       $('#main img:last').animate({opacity: 0}, {
//         duration: 1000,
//         easing: 'swing',
//         complete: function() {
//           $(this).remove()
//         }
//       });
//     }
//     return false;
//   });
// });





//1-3)
// $(function() {
//   $('#navi a').click(function() {
//     let imgSrc = $(this).attr('href');
//     let checkAni = $('#main img:last').is(':animated');
//     console.log(checkAni);
//     if (checkAni == false) {
//       $('#main img:last').animate({opacity: 0}, {
//         duration: 1000,
//         easing: 'swing',
//         start: function(){
//           $('#main img').before(`<img src="${imgSrc}">`);
//         },
//         complete: function() {
//           $(this).remove()
//         }
//       });
//     }
//     return false;
//   });
// });





//1-4)
// $(function() {
//   $('#navi a').click(function() {
//     let imgSrc = $(this).attr('href');
//     let checkAni = $('#main img:last').is(':animated');
//       $('#main img:last').animate({opacity: 0}, {
//         duration: 1000,
//         easing: 'swing',
//         start: function(){
//           $('#main img').before(`<img src="${imgSrc}">`);
//         },
//         complete: function() {
//           $(this).remove()
//         }
//       });
//     return false;
//   });
// });



// //방법 2)
// $(function() {
//   $('#navi a').click(function() {
//     let imgSrc = $(this).attr('href');
//     let checkAni = $('#main img:last').is(':animated');
//     $('#main img:last').animate({
//       opacity: 0
//     }, {
//       duration: 1000,
//       easing: 'swing',
//       start: function() {
//         $('#main img').before(`<img src="${imgSrc}">`);
//       },
//       complete: function() {
//         $(this).remove()
//       }
//     });
//     return false;
//   });
//
//   //prev, next 버튼으로 작동하는 스크립트
//   let marginLeftNum = $('#navi .page-wrap').css('margin-left');
//   // console.log(marginLeftNum);
//   // console.log(parseInt(marginLeftNum));//parseInt를 붙여서 정수로 변환(->계산이 쉬워짐)
//   const marginNumber = 300; //#navi .page-wrap .page의 width값
//   //>>--
//   $('img.next').click(function(){
//     marginLeftNum = $('#navi .page-wrap').css('margin-left');
//     $('#navi .page-wrap').animate({
//       marginLeft: parseInt(marginLeftNum) - marginNumber
//     },'fast',function(){
//       console.log($('#navi .page-wrap').css('margin-left'));
//     });
//   });
//   $('img.prev').click(function(){
//     marginLeftNum = $('#navi .page-wrap').css('margin-left');
//     $('#navi .page-wrap').animate({
//       marginLeft: parseInt(marginLeftNum) + marginNumber
//     },'fast',function(){
//       console.log($('#navi .page-wrap').css('margin-left'));
//     });
//   });



//>>-- 위 내용 리팩토링하기
$(function() {
  $('#navi a').click(function() {
    let imgSrc = $(this).attr('href');
    let checkAni = $('#main img:last').is(':animated');
    $('#main img:last').animate({
      opacity: 0
    }, {
      duration: 1000,
      easing: 'swing',
      start: function() {
        $('#main img').before(`<img src="${imgSrc}">`);
      },
      complete: function() {
        $(this).remove()
      }
    });
    return false;
  });

  let marginLeftNum = $('#navi .page-wrap').css('margin-left');
  const marginNumber = 300;

  function pagingBtnFunc(el) {
    el.click(function() {
      marginLeftNum = parseInt($('#navi .page-wrap').css('margin-left'));
      console.log(`내이메이션 진행 전 ${marginLeftNum}`);
      let isAnu = $('#navi .page-wrap').is(':animeted');
      console.log(isAni);
      if (!isAni) { //부정어 표기 -> true가 아닐때 -(false일때) !isAni  isAni == false
        if ($(el).hasClass('next') && marginLeftNum > -(marginNumber * 2)) {
          $('$navi .page-wrap').animate({
            marginLeft: parseInt(marginLeftNum) - marginNumber
          }, 'fast');
          console.log(`애니메이션 진행 후 ${$('#navi .page-wrap').css('margin-left')}`);
          alert('더 이상 이미지가 없습니다.');
        } else if ($(el).hasClass('prev') && marginLeftNum < 0) {
          $('$navi .page-wrap').animate({
            marginLeft: parseInt(marginLeftNum) + marginNumber
          }, 'fast');
        } else if (marginLeftNum == -(marginNumber * 2) || marginLeftNum == 0) {
          alert('더 이상 이미지가 없습니다.');
        }
      }
    });
  }

  $('btn').each(function() {
    pageingBtnFunc($(this));
  });

});
