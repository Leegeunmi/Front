$(function() {
  $.ajax({
    url: 'data.xml',
    dataType: 'xml',
    success: function(data){

      // let ahml = '';
      $('item',data).each(function(){
        let linkText = $('link',this).text();
        let titleText = $('title',this).text();
        let descriptionText = $('description',this).text();
        let dateText = $('date',this).text();
        let editor = $('editor',this).text();
        $('dl').append(`<dt><a href=${linkText}>${titleText}</a><dt>
          <dd>${dateText}</dd>
          <dd>${editor}</dd>
          <dd>${descriptionText}</dd>`);
      });
    }
  });

  $('button').on('click',function(){
    if($(this).hasClass("on")){
      $(this).removeClass("on");
    }else{
      $(this).addClass("on");
    }
  });
});






































// 자바스크립스는 소스코드를 한줄 씩 순차적으로 실행하기 전,
// ES6에 도입된 let,const를 포함한 모든 선언을 찾아내 먼저 실행한다.
//
// -> 변수 선언이 어디에 있든 상관없이 다른 코드보다 먼저 실행되는 특징을 호이스팅이라 한다.
//
//
// 스코프를 이용해서 변수의 접근 범위는 닫는다.
// 내부에 선언된 함수가 외부함수의 지역변수를 사용한다. 반대는 불가능
//
// 함수를 중첩으로 사용하여 외부와 단절시킨다.
