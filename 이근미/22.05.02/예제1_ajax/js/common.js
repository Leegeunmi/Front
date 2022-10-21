$(function() {
  // script영역 ajax 예
  $.ajax({
    url: 'data.xml',
    dataType: 'xml',
    success: function(data){ //이 변수로 data를 받겠다.
      //실행구문
      // console.log(data);
      // console.log($(data).find("item"));
      // console.log($("item",data)); //위 코드과 같은 결과값 반환
      /*---실습
      데이터의 item 요소를 개별로 추출하고
      아래와 같이 개별로 dl의 내부 영역에 삽입하시오.
      dt a : xml파일 내부 item의 title
      dt a href : xml파일 내부 item의 link
      dd : xml파일 내부 item의 description
      <dt><a href="http://daum.net>console.log(data);</a></dt>
      <dd>지구를 떠나서 우주에서 숨을 쉬는 일이 (중략) 설명.</dd>"
      1--개별로 접근하는것은 each method사용 (for도 가능)
      2--data정보를 tag와 조합
      3--append, prepend 혹은 string type의 빈 변수에 복합대입연산으로 추가가능
      힌트: */
      // $(data).find('item').each(function(){
      //   console.log($(this).find('link').text());
      //   console.log($(this).find('title').text());
      //   console.log($(this).find('description').text());
      // });
      let ahml = '';
      $('item',data).each(function(){
        console.log(this);
        console.log($('link',this).text());
        console.log($('title',this).text());
        console.log($('description',this).text());
        let linkText = $('link',this).text();
        let titleText = $('title',this).text();
        let descriptionText = $('description',this).text();
        $('dl').append(`<dt><a href=${linkText}>${titleText}</a><dt><dd>${descriptionText}</dd>`);
      });
      // $('dl').html(ahtml);
    }
    //콜백함수는 비동기적으로 함수 내부에 접근할 수 있다.
  });

  //--기사내용 click event로 노출
  // $('button').click(function(){
  //   $(this).addClass('on');
  // });
  $('button').on('click',function(){
    // $(this).toggleClass('on'); //1번쨰 방법) toggleClass하면 간단하게 on 켰다껐다

    // let thisClass = $(this).attr('class'); //2번쨰 방법)
    // if(thisClass == "" || thisClass == undefined){
    //   $(this).addClass("on");
    // }else{
    //   $(this).removeClass("on");
    // }

    //3번쨰 방법)- hasClass method 활용
    if($(this).hasClass("on")){
      $(this).removeClass("on");
    }else{
      $(this).addClass("on");
    }
  });

  //4번쨰 방법)- 삼항조건식
  $(this).hasClass('on') ? $(this).remove('on') : $(this).addClass('on');
});//document ready
