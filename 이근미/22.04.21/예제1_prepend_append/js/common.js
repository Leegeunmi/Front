//prepend -앞에 붙이기 append -뒤에 붙이기
$(function() {
  // // 1) script영역 prepend(), append() 사용예
  // // 1-- prepend()사용
  // let elemNum = $('p#first');//p태그의 id first를 elemNum에 담는다.
  // elemNum.prepend('<span>hello</span>');
  //
  // // 2-- append()사용
  // elemNum.append('<span>have a good day!</span>');

  /*
  2) ex)
  p태그의 총 개수 3개
  각각의 p태그의 자식요소의 제일 앞쪽에
  '<strong>kind: </strong>'를 for문 사용하여 추가하기
  */
  let pLeng = $('p').length;
  for(let i = 0; i < pLeng; i++){
    $("p:nth-child("+(i+1)")").prepend("<strong>kind: </strong>");
  }

  // /*
  // 3) ex)
  // p태그의 총 개수 3개
  // 각각의 p태그의 자식요소의 제일 뒤쪽에
  // '<br><strong>add text: </strong>'를 for문(초기값 1) 사용하여 추가하기
  // */
  // let pLeng2 = $('p').length;
  // for(let i = 1; i <= pLeng2; i++){
  //   $("p:nth-child("+i+")").append("<br><strong>add text: </strong>");
  // }
  //
  //
  // // 4) a tag 텍스트 요소 앞쪽에 img요소 추가하기
  // // let elemLi = $(li:nth-chid() a);
  // // elem.prepend('');
  //
  // // // let elemLeng = $("ul li a").length;
  // // function elemImgFunc(img) {
  // //   $("ul li:nth-child(1) a").prepend(elemImgFunc("<img src='./img/"+img+".png'>");
  // // }
  // // elemImgFunc(bolt);
  // // elemImgFunc(build);
  // // elemImgFunc(paid);
  // // elemImgFunc(watch);
  // //
  // // // for (let i = 1; i <= elemleng; i++) {
  // // // }
  // // //추가한 img코드를 배열에 담고 반복구문으로 출력
  //
  // //teacher---
  // let arrayNum = [];
  // arrayNum.push("<img src='./img/bolt.png'>");
  // arrayNum.push("<img src='./img/build.png'>");
  // arrayNum.push("<img src='./img/paid.png'>");
  // arrayNum.push("<img src='./img/watch.png'>");
  // console.log(arrayNum);
  // for(var i = 0; i < arrayNum.length; i++){
  //   let count = i + 1;
  //   $("ul li:nth-child("+count+") a").prepend(arrayNum[i]);
  // }
  //
  //
  //
  // //5)
  // // let elem = $("ul li");  -> 이렇게 써도 된다.  // let elem = $("ul li a");
  // // console.log($("ul li").find("a"));//ul li의 자식 요소중 a를 찾겠다.
  //
  // // >>> 위 코드를 eq()명령어(methods)를 사용하여 변경하기
  // // $("ul li").eq(0).find("a").prepend(arrayNum[0]);
  // // $("ul li").eq(1).find("a").prepend(arrayNum[1]);
  // // $("ul li").eq(2).find("a").prepend(arrayNum[2]);
  // // $("ul li").eq(3).find("a").prepend(arrayNum[3]);
  // for(var i = 0; i < arrayNum.length; i++){
  //   $("ul li").eq(i).find("a").prepend(arrayNum[i]);
  // }
  // //로직 - 처음에는 하나만 풀어써서 출력확인 해보고
  // //반복부분 쭉 써본다. 그다음 중복되는 것들을 찾아보고
  // //하나씩 줄여본다. --> 위의 마지막코드는 최종 줄인것
});
