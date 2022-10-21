$(function(){
  console.log($('button'));
  // let pHtml = $('p').html('E-mail : <input type = "email" name = "name">');
  //script영역 input value사용 예
  $('button').click(function(){
    console.log('click');
    let btnNum = $(this);
    console.log(btnNum);


    //javascript에서는 .innertext  jquery에서는 .text()
    if(btnNum.text() == '확인'){
      console.log('이 버튼은 확인버튼입니다.');
      //javascript에서는 .value  jquery에서는 .val()

      let inputVal = $('input').val(); //input을 만들고 거기에 값을 가져온다.
      $('p').text(`${inputVal}로 전송이 됩니다. 전송을 원하시면 전송버튼을 눌러주세요.`);
      // console.log(`확인 전: ${btnNum.text()}`);
      btnNum.text('전송');
      // console.log(`확인 후: ${btnNum.text()}`);

      //javascript에서는 forEach  jquery에서는 each
      //each를 사용해서 버튼의 첫번째 요소의 텍스트를 '전송'으로 변경하기
      // $('.btn').each(function(){ //1)
      //   $(this).text('전송');
      // })
      //
      $('button').each(function(i){//2) 콜백함수로 받겠다. //버튼태그를 인덱스 화 하겠다 i는 인덱스 값 (ex)현재 버튼이 2개 있으니 인덱스는 0,1
        if(i==0){
          $(this).text('전송');

        }
      })
    }else if (btnNum.text() == '취소') {
      console.log('이 버튼은 취소버튼입니다.');
      //1) 직접입력
      $('p').html('E-mail : <input type = "email" name = "name">');
      //2) 초기로드시 html를 변수로 담는다.
      // $('p').html(pHtml);

      //취소버튼을 누를 때 전송으로 바뀌어 있는 버튼을 다시 확인으로 바꾸기
      //1)--each
      // $('button').each(function(i){
      //   if(i==0 && $(this).text()=='전송'){
      //     $(this).text('확인');
      //   }
      // })
      //2)--prev()
      let btnNumPrev = btnNum.prev();
      if (btnNumPrev.text()=='전송'){
        btnNumPrev.text('확인');
      }
      // btnNum.prev().text('확인');
      //3)--
      // $('.btn').text('확인');
    }else if(btnNum.text() == '전송'){

      $('p').text('전송이 완료 되었습니다.');
      // alert('전송이 완료되었습니다.');
      // window.location.href = 'http://naver.com'; //javascript위 팝업창 확인 누르면 naver페이지로 이동
      //$(location).attr('href','http://naver.com'); //jquery
    }
  });
});
