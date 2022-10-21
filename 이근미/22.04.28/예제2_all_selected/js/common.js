$(function() {
  // script영역 allselected 예

  // --- 1) click event, attr()
  // $('button').click(function(){
  //   // console.log($('input[type="checkbox"]').attr('checked'));
  //   // $('input[type="checkbox"]').attr('checked','checked');
  //   $(':checkbox').attr('checked','checked'); //여기까지는 전체선택 되는 것 까지만 구현한 상태이다
  // });

  //--- 2) on method, prop()
  // $('body').on('click', 'button', function() {
  //   // console.log('click!');
  //   // $(':checkbox').attr('checked','checked'); --(1)
  //   $(':checkbox').prop('checked', true); // --(2)
  //   // $(':checkbox').prop('checked',false);
  //   // console.log($(':checkbox').prop('checked'));
  //   $(':checkbox').each(function() {
  //     if ($(this).is(':checked')) {
  //       $(this).prop('checked', false); //체크해제
  //     }else {
  //       $(this).prop('checked',true); //체크
  //     }
  //   });
  // });



  /*실습)
  전체 선택 버튼을 all 클래스를 추가하여
  checkbox를 모두 선택하고
  버튼텍스트는 '전체해제'로 변경
  전체 해제 버튼을 클릭하면 all을 제거하고
  checkbox를 모두 선택해제하는 로직 구현
  toggleClass(), hasClass(), text(), prop()
  */
  $('body').on('click', 'button', function() {
    if ($(this).hasClass('all')) {
      $(':checkbox').prop('checked', true);
      $('button').toggleClass('all');
      $('button').text('전체해제');
    } else {
      $(':checkbox').prop('checked', false);
      $('button').toggleClass('all');
      $('button').text('전체선택');
    }
  });



//하나씩 개별로 선택 후에도 전체해제가 되게해보자



//설명이 빨라서 못함
// function allCheckFunc(btn,elem){
//   btn.toggleClass('all');
//   if(btn.hasClass('all')){
//     btn.text('전체선택')
//   }
// }
// $('body').on('click', 'button', function() {
//   allCheckF
// });

});
