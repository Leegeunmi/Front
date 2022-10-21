$(function() {
  //1)
  // $('a').click(function(){ //a태그 클릭했을때의 안넘어가게 해제하기
  //   $('a').removeClass('on');//기존 모든 a에 추가된 클래스를 초기화(삭제)
  //   $(this).addClass('on');
  //   $('img').attr('src',$(this).attr('href'));//상단에 박스 클릭할때 이미지가 클릭한것와 동일한 이미지로 변경되게하기
  //   return false;
  // });


  //2)
//click해서 a태그가 변화되면 체크할께(안에 내용 추가할께)
    /*ul요소에 변화되는 속성, 태그 등
    document load 이후(DOM이 형성 된 후)의 변화를 체크하여
    스크립트에 적용할 수 있다.*/
    $('ul').on('click', 'a', function() {
    $('a').removeClass('on');
    $(this).addClass('on');
    $('img').attr('src', $(this).attr('href'));
    return false;
  })

  //3)
  $('button').click(function() {
    /*
    ul태그 내부에 자식요소 중 첫번째 위치에
    <li class="txt"><a href="./img/img04.jpg">바다</li>
    위 태그 코드를 추가하시오.
    (-> 다 로드되고 추가 되었으니 on 적용이 안된다.. 그래서 1)내용을 2)로 바꾼다.)
    */
    $('ul').prepend('<li class="txt"><a href="./img/img04.jpg">바다</li>');
  });
});
