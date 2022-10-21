$(function() {
  //script영역 event() 사용예

  //----- button으로 event실행
  //javascript 1,2 ---
  // document.querySelector("button").addEventListner("click",function(){});
  // document.querySelector("button").onclick = function(){};

  //jquery ---
  // let num = 0;
  // $("button").click(function(){
  //   console.log("click!");
  //   console.log(num);
  //   num++;
  // });


  // console.log($("img").attr("title"));

  // $("button").click(function() {
  //   if ($("img").attr("title") == "mountain_01") {
  //     $("img").attr("title", "mountain_02");
  //   } else {
  //     $("img").attr("title", "mountain_01");
  //   }
  // });

  /*위 코드를 사용하여
  이미지를 toggle형태로 구현하고
  첫번째 이미지에 alt값 : 산이미지1
  두번째 이미지에 alt값 : 산이미지2*/
  //방법1)
  // $("button").click(function() {
  //   if ($("img").attr("title") == "mountain_01") {
  //     $("img").attr("src", "./img/mountain_02.png");
  //     $("img").attr("title", "mountain_02");
  //     $("img").attr("alt", "산이미지2");
  //   } else {
  //     $("img").attr("src", "./img/mountain_01.png");
  //     $("img").attr("title", "mountain_01");
  //     $("img").attr("alt", "산이미지1");
  //   }
  // });

  //방법2)
  // $("button").click(function() {
  //   if ($("img").attr("title") == "mountain_01") {
  //     $("img").attr("src", "./img/mountain_02.png").attr("title", "mountain_02").attr("alt", "산이미지2");
  //   } else {
  //     $("img").attr("src", "./img/mountain_01.png").attr("title", "mountain_01").attr("alt", "산이미지1");
  //   }
  // });

  //방법3)
  // $("button").click(function() {
  //   if ($("img").attr("title") == "mountain_01") {
  //     $("img").attr({"src":"./img/mountain_02.png","title":"mountain_02","alt":"산이미지2"});
  //   } else {
  //     $("img").attr({"src":"./img/mountain_01.png","title":"mountain_01","alt":"산이미지1"});
  //   }
  // });


  $("a").click(function() {
    if ($("img").attr("title") == "mountain_01") {
      $("img").attr({"src":"./img/mountain_02.png","title":"mountain_02","alt":"산이미지2"});
    } else {
      $("img").attr({"src":"./img/mountain_01.png","title":"mountain_01","alt":"산이미지1"});
    }
    // e.preventDefault();
    return false;
  }); //만약 a태그에 주소가 있으면 src경로보다 먼저 주소가 작동된다.
      //이렇게 작동이 되면 안된다. -> 예전 브라우저를 사용하는 클라이언트가 있을 수 있기때문에 넘어가지 않도록 막아놓기
      /*a태그 click event사용 시 함수 내 return false사용,
      하위브라우저 혹은 특정브라우저에서 a link기본속성이 먼저 실행하여
      event가 작동하지 않는 경우가 있다.*/
      //-> return false;를 넣는다. 또는 e.preventDefault();를 넣는다.
});
