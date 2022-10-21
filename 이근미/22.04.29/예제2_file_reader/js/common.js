$(function() {
  // script영역 file reader 예
  // $(':file').mouseover(function(){
  //   //마우스올렸을때
  //   $(this).after('<p>업로드 가능한 파일의 용량은 300kb입니다.');
  // }).mouseout(function(){
  //   $(this).next().remove();
  // });

  // //on방식 (위내용과 같음)
  // $(':file').on({
  //   mouseover: function(){
  //
  //   },
  //   mouseout: function(){
  //
  //   }
  // });




  $(':file').mouseenter(function(){ //mouseover와 이벤트 발생에서 다르다 - enter가 좀 더 나음
    //마우스올렸을때
    $(this).after('<p>업로드 가능한 파일의 용량은 300kb입니다.');
  }).mouseleave(function(){ ////mouseout와 이벤트 발생에서 다르다 - leave가 좀 더 나음
    $(this).next().remove();
  });

  $('#img-input').change(function(){
    // console.log($(this)); //jquery object type으로 요소를 받음
    // console.log(this); //dom요소로 받음
    readURL(this);
  });

  function readURL(input){ //위this가 input으로 들어온다.
    // console.log(input);
    console.log(input.files[0]);
    if(input.files && input.files[0]){
      // console.log('파일을 가져왔습니다.');
      let reader = new FileReader();
      // console.log(reader);
      reader.readAsDataURL(input.files[0]);//input.files[0] -> name
      reader.onload = function(e){
        console.log(e); // ->콘솔창에서  taget 에서 result찾자
        console.log((e.target.result)); //불러오는 이미지를 텍스트화 시킨 내용 볼 수 있다.
        $('#image-selection').attr('src',e.target.result);
      }
    }
  }
});
