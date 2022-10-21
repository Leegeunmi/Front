$(function() {
  //script영역 text ellipsis 사용예
  // (img파일-기본구조내용 구현)
  let elem = $(".more-text");
  const showText = 100; // 보여주고 싶은 글자수
  let moreBtnText = "Show More";
  let lessBtnText = "Show Less";
  let content = elem.html();
  let contentLeng = content.length; // 총 글자수
  let lessText = content.substr(0,showText); //화면이 줄어들 때 보여지는 텍스트
  let moreText = content.substr(showText,contentLeng); //화면이 줄어들 때 잘린 텍스트
  // console.log(moreText)
  // console.log(lessText)
  // console.log(content.length)
  let changeHtml = '';
  // if(showText < contentLeng){
  //   changeHtml = `${lessText}<span>...</span>
  //   <span class="more-content">
  //   <span>${moreText}</span>
  //   <a href="#" class="more-btn active">
  //   <span>${moreBtnText}</span>
  //   </a>
  //   </span>`;
  // }
  if(showText < contentLeng){
    changeHtml = `${lessText}<span>...</span><span class="more-content"><span>${moreText}</span><a href="#" class="more-btn active"><span>${moreBtnText}</span></a></span>`;
    elem.html(changeHtml);
  }
  // console.log(changeHtml);

  // 버튼실행영역 ---
  $(".more-btn").click(function(){
    // console.log('click!')//버튼이 여러개 있을 경우에는 다 열리기 떄문에 x
    // console.log($(this));//누른 현재의 것만 열기 위해 this사용
    // console.log($(this).hasClass('active'));
    // // class삭제할 때 el.removeClass('클래스명');
    // console.log($(this).removeClass('active'));


    //button추가할 때 $(this).removeClass('on');
    //button삭제할 때 $(this).addClass('on');


    // if($(this).hasClass('active')){
    //   $(this).removeClass('active');
    // }else {
    //   $(this).addClass('active');
    // }// .more-btn에 active가 있으면 active지우고 아니라면 active를 추가해

    // $(this).toggleClass('active');


    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).html(`<span>${lessBtnText}</span>`);
    }else {
      $(this).addClass('active');
      $(this).html(`<span>${moreBtnText}</span>`);
    }
    // console.log($(this).parent());

    /*prev(),parent(),toggle() 3개의 메서드 사용하여
    줄임말포함된 span, 잘려진 텍스트를 담는 span을 선택하여
    toggle형태로 구현(노출시키시오)

    prev(): 선택자의 바로 앞요소 선택
    next(): 선택자의 바로 뒤 요소 선택
    parent(): 선택자의 부모 요소 선택
    toggle(): display : none 반복하여 나타냄*/
    // $(this).prev(`<span>...</span>`);
    // $(this).parent(`<span>${lessText}</span>`);
    // $(this).toggle(``)
    // console.log($(this).prev().togglet());
    // console.log($(this).parent().prev().toggle());
    // $(this).prev().togglet();
    // $(this).parent().prev().toggle();
    $(this).prev().toggle();
    $(this).parent().prev().toggle();
    e.preventDefualt();
    return false;

  });

});
