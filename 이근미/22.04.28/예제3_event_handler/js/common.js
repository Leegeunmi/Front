$(function() {
  // script영역 event handler 예
  //-----event 개별 사용-----
  // $(':submit').mouseover(function(){
  //   console.log('mouseover');
  //   $(this).after('<p>입력한 내용을 서버로 전송합니다.</P>');
  // });
  //
  // $(':submit').mouseout(function(){
  //   console.log('mouseout');
  //   $(this).next().remove();
  //   // $('p').remove();
  // });



  //-----event method chain 사용-----(위와 같은 결과값)
  // $(':submit').mouseover(function(){
  //   $(this).after('<p>입력한 내용을 서버로 전송합니다.</P>');
  // }).mouseout(function(){
  //   $(this).next().remove();
  // });



  //-----on-----(위와 같은 결과값)
  $(':submit').on({
    mouseover: function(){
      $(this).after('<p>입력한 내용을 서버로 전송합니다.</P>');
    },
    mouseout: function(){
      $(this).next().remove();
    }
  });
});
