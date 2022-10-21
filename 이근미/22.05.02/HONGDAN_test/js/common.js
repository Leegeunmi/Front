// $(function() {
//   $(window).resize(function(){
//     let winWidth = $(window).width();
//   });
// });

// $(function() {
//     let hrefNum = window.location.href;
//     let splitNum = hrefNum.split('ing/');
//     let pageTxtSplite = splitNum[splitNum.length-1].split('.');
//     let pageText = pageTxtSplite[0];
//     $('header').load('./header.html .inner',function(){
//       $('#gnb ul li').each(function(){
//         if($(this).text() == pageText) {
//           $(this).addClass('on');
//         }
//       });
//     });
//     $('footer').load('./footer.html .inner');
// });

$('header').load('./header.html .inner');
$('footer').load('./footer.html .inner');
