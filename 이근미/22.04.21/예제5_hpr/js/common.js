$(function() {
  //script영역 attr() 사용예
  //'wrap-id' class attribute 가지고 온다.

  //----- get attribute
  //javascript구현 ---
  // let attrNum = document.querySelector('#wrap-id').getAttribute('class');
  // console.log(attribute);

  //jquery구현 ---
  let num = $('#wrapp-id').attr('class');
  console.log(`get class attribute: ${num}`);

  // ex) .wrap-inner 클래스로 선택하여 id값을 가져오시오
  num = $('.wrap-inner').attr('id');
  console.log(`get id attribute: ${num}`);


  //----- set attribute
  //javascript구현 ---
  // document.querySelector('.items').setAttribute('title','this is items'); (querySelector는 첫번째 하나만 선택됨)

  //jquery구현 ---
  console.log($('items'));
  $('.items').attr('title','this is items');
  $('input').attr('checked',false); //input check 해제
  //$('input').attr('checked',true); //input checked
  console.log($('input').attr('checked'));


  //attribute는 현재 있는것의 상태자체를 받아오거나 그 상태를 바꾸는 것이다.
  //----- add class

  //javascript구현 ---
  // document.body.classList.add('bg-red');

  //jquery구현 ---
  $("body").addClass("bg-red");
  $("body").addClass("bg-blue");
  $("body").addClass("bg-yellow");
  $("body").addClass("bg-black");
});
