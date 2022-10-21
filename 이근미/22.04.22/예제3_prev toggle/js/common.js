$(function() {
  //script영역 prev toggle 사용예
  // document.querySelector('#gnb').prevElementElepsis??();
  console.log($('#gnb').prev());
  console.log($('#gnb').next());
  $('button').click(function(){
    $('header').toggle();
  });

});
