$(function() {
  //script 영역 window resize 예
  /* [참고]
  $('body').prepend('<div class="box"></div>')
  번호를 부여해 로또추첨 하거나 버튼 눌러서 계속 작동하게도 만들어볼 수 있다.
  아래 내용을 토대로 응용해 보기*/

  $('.box').each(function() {
    // console.log($(this));
    let transSize = '+'; //크기변화 전환
    let leftDir = '+'; //x축 방향 전환
    let topDir = '+'; //y축 방향 전환
    let speedNum = 1; //부딛힐때 속도랜덤 변수
    const maxNum = 7;
    let thisElem = $(this);

    $(window).resize(function() {
      let thisOffset = thisElem.offset();
      // console.log(thisOffset);

      //1) size 변화 조건식
      // console.log(thisElem.width());
      if (thisElem.width() > 200) {
        transSize = '-';
      } else if (thisElem.width() < 50) {
        transSize = '+';
      };

      //2) x축 변화 조건식
      // console.log(thisElem.css('left') + ',' + thisOffset.left);

      if (thisOffset.left > $(window).width() - thisElem.width()) {
        leftDir = '-';
        // console.log(Math.random()); //random() 0~0.9 *10  ceil, round, floor 소수점 자리정리
        speedNum = Math.ceil(Math.random()*10);//0부터 9까지 나오는 수 -> 반올림해서 1-10사이의 랜덤 수
        // if(speedNum > maxNum){
        //   speedNum = maxNum -1; // 맥시멈속도를 정하고 그 속도가 넘어가면 맥시멈 속도 - 1 로 줄일 수도 있다.
        // }
        thisElem.css('left', $(window).width() - thisElem.width());
      } else if (thisOffset.left < 0) {
        leftDir = '+';
      }

      //3) y축 변화 조건식
      // console.log(thisElem.css('top') + ',' + thisOffset.top);

      if (thisOffset.top > $(window).height() - thisElem.height()) {
        topDir = '-';
        speedNum = Math.ceil(Math.random()*10);
        thisElem.css('top', $(window).height() - thisElem.height());
      } else if (thisOffset.top < 0) {
        topDir = '+';
      }

      //4) thisElem 최종 적용
      // thisElem.css('width',transSize+'=1px');//resize할때마다 1씩증가하거나 뺀다.
      // thisElem.css('height',transSize+'=1px');
      thisElem.css({'width': transSize + '=1px','height': transSize + '=1px'}); //위 내용을 객체형식으로
      thisElem.css({'left': leftDir + '='+speedNum+'px','top': topDir + '='+speedNum+'px'});
    });
  });
});
