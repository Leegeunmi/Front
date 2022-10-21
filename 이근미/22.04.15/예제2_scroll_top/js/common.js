'use strict'
//scroll top
let numY = 0; //y축 scroll변수
let numX = 0;
let elem = document.querySelector('#mydiv')
let ctnElem = document.querySelector('#content')

//y축 scroll 작동함수------------
function scrollTopFunc(){
  // numY = numY + 10;
  numY += 10;
  if(numY > 130) {
    numY -= 10;
  }
  // console.log(numY);
  elem = document.querySelector('#mydiv');
  // console.log(elem);
  // console.log(elem.scrollTop);//scroll를 움직이고 버튼을 누르면 수치가 바뀐다.(얼만큼 밑으로 내렸느냐는 값을 가져오는 것이 scrollTop)

  elem.scrollTop = numY;//값을 할당
  console.log(numY);
  // console.log(elem.scrollTop);//값을 할당하고 버튼을 누르면 값만큼 내려간다.
  // console.log(`scroll height : ${elem.scrollHeight}`);//scroll의 높이를 출력한다.(== content의 높이:800px)
  // console.log(`offset height : ${elem.offsetHeight}`);//내부의 높이 값(== mydiv 250px)
  // console.log(`scroll width : ${elem.scrollwidth}, offset width : ${elem.offsetwidth}`); //(가로)
  /*content의 높이를 강제로 800px로 지정하여 스크롤이 800px으로 생겼다.
  content의 높이 값이 없다면 부모영역인 mydiv만큼만 스크롤이 생긴다 (== offset)*/
}

function scrollBottomFunc(){
  numY -= 10;
  if(numY < 0) {
    numY = 0;
  }
  elem.scrollTop = numY;
  console.log(numY); //-버튼을 누를떄 마다 numY 만큼 변화
  // console.log(elem.scrollTop); //-버튼을 누를떄 마다 numY 만큼 스크롤이 올라간다.
}

//scrollTop을 주로 많이 쓴다..


//x축 scroll 작동함수------------
function scrollRightFunc(){
  numX += 10;
  elem.scrollLeft = numX
  console.log(ctnElem.clientWidth);
  console.log(ctnElem.offsetWidth);
}

function scrollLeftFunc(){
  numX -= 10;
  elem.scrollLeft = numX
  // console.log(numX);
  // console.log(elem.scrollLeft);
  console.log(ctnElem.offsetWidth);
}
