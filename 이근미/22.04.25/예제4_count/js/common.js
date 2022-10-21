// script영역 animate()사용 예
$(function() {
  let boxNum = $('.flex-box .count'); //배열로 담겨있음 순서를 잘 모르기 때문에 each를 해주자
  // boxNum.animate({left:'100px'},4000,'swing',function(){
  //   alert('animation이 종료되었습니다.');
  // });
  boxNum.each(function() {
    // console.log($(this));
    // $(this).attr('src','./img...');//attr방식
    //$(this).prop('Counter', 0); //counter attribute 0을 생성하겠다.
    $(this).prop('Counter', 0).animate({Counter:$(this).text()},{
      //0부터 100까지 4초동안 늘려라
      duration: 4000,
      easing:'swing',
      step: function(now){
        // console.log(now);
        console.log(Math.ceil(now));
        $(this).text(Math.ceil(now));
      },
      complete: function(){//작업이 다 끝나고 내용추가
        console.log('완료');
        $(this).css('background','brown');
      }
    });
    // console.log($(this).prop('Counter'));
  });
});
