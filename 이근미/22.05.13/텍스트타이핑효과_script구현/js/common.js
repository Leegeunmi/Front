'use strict'
function autoType(elementClass,typingSpeed){
  // console.log(elementClass+','+typingSpeed);
  let thisElem = $(elementClass);
  console.log(thisElem);
  thisElem.prepend('<div class="cursor" style="left: 0; right: initial;"></div>');
  thisElem = thisElem.find('.text');
  let text = thisElem.text().trim().split('');//trim : 텍스트의 양쪽 끝 공백을 정리해준다.(없애준다.)
  console.log(text);
  console.log(text[0]);
  thisElem.text('');
  let amountOfChars = text.length;//각각의 텍스트 수
  console.log(amountOfChars);
  let newString = '';

  setTimeout(function(){//1.5초 뒤에 아래 내용을 실행하겠다.
    thisElem.css('opacity',1);
    thisElem.prev().removeAttr('style');
    // console.log(thisElem.prev());
    for(let i = 0; i < amountOfChars; i++){
      (function(count,char){//즉시실행 함수
        setTimeout(function(){
          newString += char;
          thisElem.text(newString);
        },count*typingSpeed)
      })(i+1, text[i])//i+1은 count에 들어가고 text[i]는 char에 들어간다.
      // newString = text[i]
      // console.log(newString);
    }
  },1500);
}
$(function(){
  autoType('.typing',200);
});
