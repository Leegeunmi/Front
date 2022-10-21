$(function() {
  // script영역 check value 예
  //---button사용
  // $('button').click(function() {
  //   let emailNum = $('input[name=email]').val();
  //   let checkNum = $('input[name=check]').val();
  //   if(emailNum !== checkNum){ // == 타입까지 같다.
  //     $('em').text('메일 주소가 동일하지 않습니다.');
  //   }else{
  //     $('em').text('메일 주소가 동일합니다.');
  //   }
  //   console.log(emailNum);
  //   console.log(checkNum);
  // });

  // ---a사용
  $('a').click(function() {
    let emailNum = $('input[name=email]').val();
    let checkNum = $('input[name=check]').val();
    if(emailNum !== checkNum){ // == 타입까지 같다.
      $('em').text('메일 주소가 동일하지 않습니다.');
      // return false;
    }else{
      $('em').text('메일 주소가 동일합니다.');
      // return false;
    }
    console.log(emailNum);
    console.log(checkNum);
  });


});
