$(function() {
  //jquery 실행구문
  // 1) first,first-child/last,last-child의 비교 예제
  //$('p:first-child').css('color','red');// p를 자식요소로 갖고있는 요소의 자식들 중 첫번째 p를 선택
  //$('p:first').css('color','blue');// document전체에서 선택한 요소의 첫번째를 선택
  //$('P:last-child').css('color','green'); //p를 자식요소로 갖고 있는 요소의 자식들 중 마지막 p를 선택
  //$('p:last').css('color','red'); // document 전체에서 선택한 요소의 마지막번째를 선택

  //2) even, odd 예제
  //index값이 0부터 시작한다.
  //$('li:even').css('color','green');//(even(짝수)인데 홀수자리에 바뀜 -> css와 달리 0부터 시작한다.
  //$('li:odd').css('color','blue');
  // console.log($('li:odd'));

  //3) eq,gt(greter than),lt(less than);
  //index값이 0부터 시작한다.
  //$('li:eq(2)').css('color','red'); //해당 인덱스와 같은 위치의 요소를 선택(index는 0부터);
  //$('li:gt(2)').css('color','blue');//현재시점 뒤에 나머지 색을 blue로 변경
  //console.log($('li:gt(2)').length);//현재시점 뒤에 나머지 몇개가 남아있는지 확인

  // $('li:lt(2)').css('color','green'); //현재시점을 기준으로 앞에 나머지 색을 green으로 변경
  //less than eq기준으로 index가 작은 요소들을 선택

  //4) heading 태그 선택
  // $(':header').css('color','red');
  // $('h1,h6').css('color','blue');

  //5) contains필터 선택 예제
  //:contains 문자열로 포함 유무확인 후 요소 선택
  // $('li:contains("menu1")').css('color','red');
  // $('p:contains("안")').css('color','orange');
  // $('p:contains("lorem")').css('color','pink');
  // $('p:contains("e")').css('color','blue');
  //
  // let elem = $('li:contains("menu1")');
  // console.log(elem);
  // if(elem.length > 0){
  //   console.log('mwnu1 존재합니다.');
  // }

  //6) has 필터 예제 : 특정태그를 포함하고 있는 태그
  //:has 태그포함 유무로 요소 선택
  // $('li:has("strong")').css('color','red');
  // $('li:has(p)').css('color','blue');
  // $('li:has(span)').css('color','orange');
  // $('li:has(a), li:has(a) a').css('color','green');

  //7) parent 필터 예제
  $('li:parent').css('border','1px solid green');//자식요소를 갖고있는 요소를 선택
  $('li:not(:parent)').css('border','1px solid red');//부정유사클래스를 사용하여 자식요소가 존재하지 않는 요소를 선택할 수 있다.
});


//스탑워치 겟타임 셋타임  셋 인터블  //논리연산자  // new 객체만들기
//특정소스를 비워두고 빈공간을 채우기
//5.12 한번 더 시험 - 스마트 문화 앱
