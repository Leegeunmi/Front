$(function(){
  //jqeury 실행구문
  // //1) script 영역 text() 사용 예
  // let textNum = ''
  // textNum = $('p#first').text('hello jquery'); //p#first에 있는 글자를 hello jquery로 바꿈
  // // console.log(textNum);

  //2) 특정 요소의 텍스트를 다른 요소에 삽입하는 예
  // //방법 1>
  // console.log($('p#second').text());
  // // $('p#first').text('');
  // $('p#first').text($('p#second').text());

//위 아래 코드 모두 같은 결과

  //방법 2> 변수처리
  //a type--
  // let elem = $('p#first');
  // let elemInputText = $('p#second').text();
  // elem.text(elemInputText);

  //b type--
  // let elem = $('p#first');
  // let elemInput = $('p#second');
  // elem.text(elemInput.text());

  let numHtml = '';
  numHtml = $('p#second').html(); //글저뿐 아니라 태그까지 다 들고온다.
  // numHtml = document.querySelector('p#second').innerHTML;
  console.log(numHtml);
  //프렘임웍 (리엑트, 뷰, jquery .. 등등)사용에서는 순수javascript사용을 많이들 한다.


  //3) #third의 자식요소 h2의 텍스트를 가져와서 p#first에 추가 변경하세요.
  //1--
  // $('p#first').text($('#third > h2').text());

  //2--
  numHtml = $('#third h2').html();
  console.log(numHtml);
  $('p#first').html(numHtml);

  //3-- javascript로 구현
//   numHtml = document.querySelector('#third h2').innerHTML;
//   console.log(numHtml);
//   document.querySelector('p#first').innerHTML = numHtml;
// });
