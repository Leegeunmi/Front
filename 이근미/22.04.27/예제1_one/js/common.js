$(function() {
  // $('a')function(e){
  //   preventDefault();
  //   return false;
  // } //a태그 클릭했을때의 기능 해제하기 (코드 정확하지 않음 좀 더 알아보기)



  $('a').click(function(){ //a태그 클릭했을때의 안넘어가게 해제하기
    $('a').removeClass('on');//기존 모든 a에 추가된 클래스를 초기화(삭제)
    $(this).addClass('on');
    $('img').attr('src',$(this).attr('href'));//상단에 박스 클릭할때 이미지가 클릭한것와 동일한 이미지로 변경되게하기
    return false;
  });




  // let count = 0;
  // $('a').one('click',function(){ //a태그 클릭했을때의 안넘어가게 해제하기
  //   $('a').removeClass('on');//기존 모든 a에 추가된 클래스를 초기화(삭제)
  //   $(this).addClass('on');
  //   $('img').attr('src',$(this).attr('href'));//상단에 박스 클릭할때 이미지가 클릭한것와 동일한 이미지로 변경되게하기
  //   console.log(count);
  //   count++;
  //   return false;
  // });
  //
  //
  // $('a').click(function(){
  //   // console.log('click');
  //   return false;
  // });// 이렇게 하면 한번씩만 선택되고 더이상 선택되지 않는다.
});
