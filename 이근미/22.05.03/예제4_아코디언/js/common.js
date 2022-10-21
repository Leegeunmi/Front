$(function() {

  //script 영역 아코디언 ui인터섹션 만들기 만들기 예제1
  $('dd:not(:first)').css('display', 'none'); //첫번째를 제외한 나머지
  $('dl dt').click(function() {
    // console.log($('+dd',this).text());
    if ($('+dd', this).css('display') == 'none') {
      $('dd').slideUp('slow');
      $('+dd', this).slideDown('slow');
    }
  });




  /* dt click event를 animate method를 사용하여 구현하기 */
  // ---> this 개념에 대한 생각을 해볼 수 있다.
  $('dd:not(:first)').css({
    'display':'none',
    'height': 0
  })
  $('dl dt').click(function() {
    let thisElem = $(this);
    // console.log(thisElem);
    // console.log($('+dd',this).text());
    // console.log($(thisElem));
    if ($('+dd', thisElem).css('display') == 'none') {
      // $('dd').slideUp('slow');
      // $('+dd', this).slideDown('slow');
      $('dd').each(function(){
        // console.log($(this));
        // console.log($(this).css('display'));
        // console.log($(this).css('height'));
        if ($(this).css('display') == 'block'){
          // console.log($(this).css('display'));
          $(this).animate({height:0},'slow',function(){
            console.log($(this).text());
            $(this).css('display','none');
          });
        }
      });
      $('+dd', thisElem).css('display','block').animate({height:300});
    }
  });





let isAni = $('dd').is(':animated');
console.log(isAni);
if(!isAni){
  $('dd').each(function(){
    if(parseInt($(this).css('height')) == 300){
      
    }
  })
}


}); //document ready
