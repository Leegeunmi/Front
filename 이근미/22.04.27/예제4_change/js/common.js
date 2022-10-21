$(function() {
  //script영역 change 예

  /* prev(),next() method활용하여
  변경된 select값을 해당 input값에 입력하시오 */

// //A type ------
  // $('select').change(function(){
  //   let thisVal = $(this).val(); //select의 option value값
  //   // console.log(thisVal);
  //   $('input').val(thisVal);
  //   console.log($(this).next());
  //   // $(this).next().find('input').val(thisVal);//개인 혹은 법인으로 선택할 때 성별에 까지 안뜨게 하기 -사업자부분에만 input되게 하기
  // });
//
//   // $('input.inputTest').change(function(){
//   //   alert(`input text가 ${$(this).val()}로 변경되었습니다.`);
//   // });
//
//
// //B type ------
//   $('select').change(function(){
//     let thisVal = $(this).val();
//     // window.location.href = thisVal; //해당 경로로 이동하기-javascript
//     $(location).attr('hrdf',thisVal);//해당 경로로 이동하기-jquery
//     console.log(thisVal);
//   });





//A type과 B type을 change method내부에서 if문을 사용하여 구현하시오.

//A type ------
  // $('select').change(function(){
  //   let thisVal = $(this).val(); //select의 option value값
  //   // console.log(thisVal);
  //   // $('input').val(thisVal);
  //   console.log($(this).next());
  //   $(this).next().find('input').val(thisVal);//개인 혹은 법인으로 선택할 때 성별에 까지 안뜨게 하기 -사업자부분에만 input되게 하기
  // });

  // $('input.inputTest').change(function(){
  //   alert(`input text가 ${$(this).val()}로 변경되었습니다.`);
  // });


//B type ------
// ( hasClass는 true / false로 반환한다. )
  $('select').change(function(){
    let thisVal = $(this).val();
    //family-site에서 사이트를 선택했을때 해당 사이트로 이동할 수 있게하기 (Atype과 Btype을 if문을 통해서 하나로 만들기)
    if($(this).hasClass('family-site')){//select가 family-site라는 클래스 가지고 있다면
      $(location).attr('href',thisVal);//select value값을 href에 넣고 그 경로로 이동할꺼야
    }else{//아니라면
      $(this).next().find('input').val(thisVal);//위의 상황이 아닐경우에는 늘 _ 개인 혹은 법인으로 선택할 때 성별에 까지 안뜨게 하기 -사업자부분에만 input되게 하기
    }
  });
});
