$(function() {
  // $(window).scroll()//window자체에 scroll이 발생했을때
  $(window).scroll(function(){
    let winHeight = $(window).height() -70;
    // console.log(winHeight);
    // console.log($(this).scrollTop());//스크롤이 얼만큼 내려가는지 체크할 수 있다.
    let scTop = $(this).scrollTop();
    let navBar = $('nav');
    //if구문으로 구현하시오.
    if(scTop > winHeight){
      navBar.addClass('fixed');
    }else{
      navBar.removeClass('fixed');
    }
  });
});
