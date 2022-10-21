$(function() {
  //예제4의 common.js 복사 후 추가한것

  let elem = $(".more-text");
  const showText = 100;
  let moreBtnText = "Show More";
  let lessBtnText = "Show Less";
  // elem = document.body.getElementByClassName('more-text');
  // for(let i = 0; i < elem.length; i++){
  //   let content = elem[i].html();
  // }
  //each method를 사용한 위와 같은 구문
  elem.each(function(i) { //foreach문
    console.log(i);
    // $(this).text() // this로 11111 22222 33333의 각각 text가져오기
    // console.log($(this).text());
    let content = $(this).html();
    let contentLeng = content.length;
    let lessText = content.substr(0, showText);
    let moreText = content.substr(showText, contentLeng);
    let changeHtml = '';
    if (showText < contentLeng) {
      changeHtml = `${lessText}<span>...</span><span class="more-content"><span>${moreText}</span><a href="#" class="more-btn active"><span>${moreBtnText}</span></a></span>`;
      $(this).html(changeHtml);
      if(i == 0){
        $(this).html('1>>'+changeHtml);
      }else if(i == 1){
        $(this).html('2>>'+changeHtml);
      }else if(i == 2){
        $(this).html('3>>'+changeHtml);
      }
    }
  });


  $(".more-btn").click(function() {

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).html(`<span>${lessBtnText}</span>`);
    } else {
      $(this).addClass('active');
      $(this).html(`<span>${moreBtnText}</span>`);
    }
    // console.log($(this).prev().toggle());
    // console.log($(this).parent().prev().toggle());
    $(this).prev().toggle();
    $(this).parent().prev().toggle();
    e.preventDefualt();
    return false;
  });

});
