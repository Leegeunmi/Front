$(function() {
  // script영역 input disabled 예
  //ex) 20대 이상은 술 입력 가능하게 하고  밑으로는 입력하지 못하게 하기
  $('select').change(function(){//select가 바뀌었다면 실행
    // console.log($(this)[0][0]);// -> 10대 출력
    // console.log($(this)[0][$(this)[0].length-1]);//length를 사용하여 마지막 요소 선택
    // console.log($(this).val());
    // console.log($(':selected').attr('value'));

    /*
    실습:
    10대 일때는 input text field를 비활성화 하고
    10대가 아닐때는 input text filed를 활성화 하시오.
    removeAttr(''):attribute 삭제
    */
    let valueNum = $(':selected').attr('value');
    if(valueNum != '10대'){
      $('input').removeAttr('disabled');
    }else{
      $('input').attr('disabled','disabled');//$('input').attr('disabled',true);
    }
  });

});
