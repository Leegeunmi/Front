// script영역 animate()사용 예
$(function() {
  let count = 0;
  $('button').click(function(){
    // 수치증가 복합대입연산 사용방법
    // console.log('click');

    // $('.box').css('left',count);
    // count++;
    // $('.box').animate(변화된값,duration,timingfunc,function(){
      //첫번째 인자: 변화된 값
      //두번째 인자: 경과(지속)시간 -> number타입으로 들어감
      //두번째 인자: 변화곡선(timingfunction) /easing -> string(ease ..) 타입으로 들어감
      //세번째 인자: 애니메이션이 종료되면 실행되는 함수
      // $('.box').animate({left:'+=10px',top:'+=10px;'});
    // });

    //scc style 다중적용---
    // $('.box').animate({left:'250px;',opacity:'0.5',height:'150px',width:'150px'});
    // $('.box').animate({
    //   left:'250px;',
    //   opacity:'0.5',
    //   height:'150px',
    //   width:'150px'
    // });

    //toggle 사용방법---
    //elem.toggle();
    // $('.box').animate({height:'toggle',width:'toggle'});
    // $('.box').animate({top:'toggle', left:'toggle'}); //(css와 함께 설정)

    //animate 다중사용---
    // let elem = $('.box');
    // //default : 0.4초  fast: 0.2초  slow : 0.6초
    // elem.animate({height:'300px',opacity:'0.4'},'slow');
    // elem.animate({width:'300px',opacity:'0.8'},'slow');
    // elem.animate({height:'100px',opacity:'0.4'},'slow');
    // elem.animate({width:'100px',opacity:'0.8'},'slow');
    /*순차적으로 실행된다..
    동일한 요소가 animat를 여러번 작동시킬경우
    먼저 실행한 animate가 종료된 후 다음 animate가 작동된다.*/


    //animate 재귀함수 사용---
    // function anibox(){
    //   // $('.box').animate({height:'+=10px', width:'+=10px'},1000,'swing',function(){
    //   //   //종료되었을 때 실행
    //   //   anibox();
    //   // });
    //
    //   $('.box').animate({height:'+=10px', width:'+=10px'},1000,'swing',anibox);
    // }
    // anibox();


    //animated stop---
    console.log($('.box:animated'));
    $('.box:animated').stop();//엄청많이 클릭할때 그 횟수 다 안채우고 최근의 마지막까지만 실행하고 멈춤
    $('.box').animate({left:'+=10px', top:'+=10px'});

  });
});
