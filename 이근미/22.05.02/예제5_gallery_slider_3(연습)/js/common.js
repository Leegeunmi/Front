$(function() {
  $('#navi a').click(function() {
    let imgSrc = $(this).attr('href');
    let checkAni = $('#main img:last').is(':animated');
      opacity: 0
    }, {
      duration: 400,
      easing: 'swing',
      start: function() {
        $('#main img').before(`<img src="${imgsrc}"`);
      },
      complete: function() {
        $(this).remove()
      }
    });
    return false;
  });

  const marginNumber = 600;
  const pwElem = $('#navi .page-wrap');
  const pageLeng = $('#navi .page-wrap .page').length;
  $(pwElem).width(marginNumber*pageLeng);

  function pagingBtnFunc(el){
    el.click(function(){
      let marginLeftNum = parseInt(pwElem.css('margin-left'));
      let isAni = pwElem.is(':animated');
      if(isaAni == false){
        if($(el).hasClass('next') && marginLeftNum > -(marginNumber*(pageLeng-1))){
          pwElem.animate({marginLeft: marginLeftNum - marginNumber},'fast');
        }else if($(el).hasClass('prev') && marginLeftNum < 0){
          pwElem.animate({marginLeft: marginLeftNum + marginNumber},'fast');
        }else if(marginLeftNum == -(marginNumber*(pageLeng - 1)) || marginLeftNum == 0)
        alert('더 이상 이미지가 없습니다.');
      }
    });
  }
  $('.btn').each(function(){
    pagingBtnFunc($(this));
  });
});
