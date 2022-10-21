$(function() {
  // script영역 label change 예

  // ---input선택방식 1)
  // let inputElem = $('input[type=radio]');
  // console.log(inputElem);

  // ---input선택방식 2) -> 축양형
  // let inputElem = $(':radio');
  // console.log(inputElem);

  $(':radio').change(function(){
    // console.log('change!');
    let genderNum = $(this).attr('id')
    // console.log(genderNum);

    // $('label[for = "'+genderNum+'"]').text()
    // console.log($('label[for = "'+genderNum+'"]').text());

    $('label').css('font-weight','normal');//label 모든 요소의 font-weight 초기화
    $('label[for = "'+genderNum+'"]').css('font-weight','bold');
  });




  /*
  취미를 구분하는 checkbox 및 label 추가하고 (헬스,그림)
  change method 내부에서 if조건문을 사용하여 type속성을 구분하고
  checkbox, radio일 때 로직을 구현사이오.
  */
  // //checked 확인 방법 --
  // //1번:
  // if($('input[type=checkbox]:checked').length > 0){}
  // //2번:
  // if($('iinput[type=checkbox]').prop('checked') == true){}
  // //3번:
  // if($('input[type=checkbox]').is(':checked') == true){}
  $(':checkbox, :radio').change(function() {
    let genderNum = $(this).attr('id');
    if($(this).attr('type')=='radio'){
      $('input[type=radio] + label').css('font-weight','normal');
      $('label[for= "'+genderNum+'"]').css('font-weight','bold');
    }else {
      if($(this).prop('checked') == true){
        $('label[for= "'+genderNum+'"]').css('font-weight','bold');
      }else {
        $('label[for= "'+genderNum+'"]').css('font-weight','');
      }
    }
  });
});
