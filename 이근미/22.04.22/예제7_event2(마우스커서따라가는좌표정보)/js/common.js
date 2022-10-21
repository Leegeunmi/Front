$(function() {
  //script영역 event사용 예
  $('body').append('<span class="toolTip"></span>');
  $('img').mousemove(function(e){
    // console.log($(this));
    // console.log(e.clientX);
    // console.log(e.clientY);

    /*
    1. span태그 내부에 '현재 x좌표:   현재 y좌표:   '추가 하고
    span 위치를 e.clientX, e.clientY값을 사용하여 커서를 따라다니는 로직을 구현하시오

    2. jquery 요소를 추가하는 method를 사용하여
    tooltip클래스를 갖고 있는 span태그를 body에 추가하시오 */
    let mX = e.clientX;
    let mY = e.clientY;
    $('span').html(`현재 x좌표: ${mX} y좌표: ${mY}`);
    $('span').css({'left':mX, 'top':mY});
  });
});
