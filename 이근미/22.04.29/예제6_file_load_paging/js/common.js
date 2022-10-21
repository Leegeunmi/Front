// $(function() {
//   // script영역 file load paging 예
//     $('header').load('./header.html .inner');
//     $('footer').load('./footer.html .inner');
//     let hrefNum = window.location.href;
//     // console.log(winHref);
//     console.log($('#gnb'));
//     console.log($('#gnb').html());
//     console.log(hrefNum);
//
//     /*실습: window location href값을 가져오고 split을 사용하여
//     해당페이지를 인식할 수 있는 string값으로 현재페이지 동일한
//     gnb li요소에 'on'클래스 추가하시오.*/
//     let winSplit = hrefNum.split('/');
//     console.log(winSplit);
//     console.log(winSplit[4]);
//     console.log(typeof(winSplit[4]));
//       if('./header.html .inner .#gnb li:nth-child(1) a' == winSplit[4]){
//         console.log('o');
//         // $('header').load('./header.html .inner #gnb ul li').addClass('on');
//       }
// });








//실습: teacher
$(function() {
    let hrefNum = window.location.href;
    let splitNum = hrefNum.split('ing/');
    let pageTxtSplite = splitNum[splitNum.length-1].split('.');
    let pageText = pageTxtSplite[0];
    $('header').load('./header.html .inner',function(){
      $('#gnb ul li').each(function(){
        if($(this).text() == pageText) {
          $(this).addClass('on');
        }
      });
    });
    $('footer').load('./footer.html .inner');
});
