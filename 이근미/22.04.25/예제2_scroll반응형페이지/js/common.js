// script영역 scroll 반응형 페이지 사용 예
$(function() {
  /*scroll method를 사용하여
  scrolltop의 값이 첫번째 slide 높이값(window높이값)
  보다 클 때 nav태그에 fixed클래스를 추가하시오.*/
  $(window).scroll(function(){
    // let winHeight = $(this).height(); //window창의 높이를 가져온다.
    // let scTop = $(this).scrollTop(); //window창의 scroll top값을 가져온다.
    // let navBar = $('nav');
    // if(scTop > winHeight -70){
    //   navBar.addClass('fixed');
    // }else {
    //   navBar.removeClass('fixed');
    // }

    let winHeight = $(this).height(); //window창의 높이를 가져온다.
    let thisScrollTop = $(this).scrollTop(); //window창의 scroll top값을 가져온다.

    $('.slide').each(function(){
      // console.log($(this));//여기서 this는 .slide를 가르킨다.
      let thisOffset = $(this).offset();
      // console.log($(thisOffset));//객체타입을 던져주는데 안에는 좌표값이 있다.

      /*slide 구간을 if문으로 체크하고 (논리연산자)
      각 구간마다 h2의 텍스트를 log에 출력해보기*/
      // console.log(thisOffset.top);
      // if(0 <= thisOffset.top < winHeight){
      //   console.log($(this).find('h2').text());
      // }
      if(thisOffset.top <= thisScrollTop && thisScrollTop < thisOffset.top + winHeight){
        // console.log($(this).find('h2').text());
        console.log($(this).data('background'));

        /*body요소에 background-color값을
        현재 .slide요소(-> $(this) )의 data-background값으로 변경하시오*/
        let bodyBgColor = $(this).data('background');
        $(this).css('background-color',bodyBgColor);
        //첫화면에서는 텍스트 고정해보기(못해봄)
        $(this).addClass('on');//스크롤하면서 배경색 바뀌면서 텍스트도 옆으로 동적으로 이동하며 나오게 하기
      }
    });

    let navBar = $('nav');
    if(thisScrollTop > winHeight -70){
      navBar.addClass('fixed');
    }else {
      navBar.removeClass('fixed');
    }
  });


});
