$(function() {
  //script영역 focus 예
  //document.querySelector('input').value  -> javascript
  // 입력한 값의 font-color를 #cccccc로 변경하기 (method chain사용)
  $('input').val('입력해주세요.').css('color','#cccccc').one('focus',function(){//one안하면 적다가 밖에 클릭하면 적은거 사라짐.. 포커스콜백은(초기포커스일 때 한번만 실행)
    //텍스트에 focus 되었을 때 실행
    $(this).val('').css('color','black');// val값을 지워주고 다시쓰는 텍스트의 색은 black
  }) //(체인연결중 -> ;붙이지 말것)
  .blur(function(){//input부분 바깥영역을 클릭했을때_벗어났을때_focus out일때 실행 (앞에 .one 부분은 처음 한번 실행되고 다시 초기화 하기위해서 .blur에서 실행시켜준다.)
    //focus out일 때 실행
    if($(this).val() == ''){ //input에 값이 없을때
      $(this).val('입력해주세요.').css('color','#cccccc').one('focus',function(){
        $(this).val('').css('color','black')//다시 리셋하고 + focus되었을 때는 val값을 지워주고 다시쓰는 텍스트의 색은 black
      });
    }
  });
});
