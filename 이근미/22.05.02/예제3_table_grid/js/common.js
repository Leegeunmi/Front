$(function() {
  let thisIndex = 0;
  //같은 결과의 4가지 방식

  // $('td').mouseover(function(){
  //   thisIndex = $(this).index() + 1;
  //   // console.log(thisIndex);
  //   $('td:nth-child('+thisIndex+')').addClass('hover');
  // }).mouseout(function(){
  //   thisIndex = $(this).index() + 1;
  //   $('td:nth-child('+thisIndex+')').removeClass('hover');
  // }); //한번만 반복



  // $('td').mouseenter(function() {
  //   thisIndex = $(this).index() + 1;
  //   // console.log(thisIndex);
  //   $('td:nth-child(' + thisIndex + ')').addClass('hover');
  // }).mouseleave(function() {
  //   thisIndex = $(this).index() + 1;
  //   $('td:nth-child(' + thisIndex + ')').removeClass('hover');
  // }); //계속 반복



  // $('td').on({
  //   mouseenter: function() {
  //     thisIndex = $(this).index() + 1;
  //     $('td:nth-child(' + thisIndex + ')').addClass('hover');
  //   },
  //   mouseleave: function() {
  //     thisIndex = $(this).index() + 1;
  //     $('td:nth-child(' + thisIndex + ')').removeClass('hover');
  //   }
  // }); //위와 같은 결과



  $('td').on({
    mouseenter: function() {
      thisIndex = $(this).index();
      $('table tr').each(function() {
        // console.log($(this).find('td').eq(1).text());
        $(this).find('td').eq(thisIndex).addClass('hover');
      });
    },
    mouseleave: function() {
      thisIndex = $(this).index();
      $('table tr').each(function() {
        $(this).find('td').eq(thisIndex).removeClass('hover');
      });
    }
  });
}); //document ready
