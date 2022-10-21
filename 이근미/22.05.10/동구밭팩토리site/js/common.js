'use strict'
// // PC 인지 Mobile 인지 확인
// function getUserAgent(){
// 	var filter_pc = "win16|win32|win64|mac";
//
// 	if(navigator.platform){
// 		if(filter_pc.indexOf(navigator.platform.toLowerCase()) < 0){
// 			return "mobile";
// 		}else{
// 			return "pc";
// 		};
// 	}else{
// 		return false;
// 	};
// };

// //-----스크롤링 헤더-----
// jQuery(window).scroll(function(e) {
//   var scrTop = jQuery(window).scrollTop();
//   if (scrTop > 165) {
//     if (!jQuery('.headerWrap').hasClass('fixed')) {
//       jQuery('.headerWrap').removeClass('fixed');
//     };
//   };
// });

//-----gnb 노출 비노출-----
function callGnbWrap(event) {
  var gnb = document.getElementById('gnbWrap');
  //노출처리--
  gnb.classList.add('open');
  //비노출처리--
  setTimeout(function() {
    gnb.classList.add('active');
  }, 10);
};
function closeGnbWrap(event){
  var gnb = document.getElementById('gnbWrap');
  //비노출 취소--
  gnb.classList.remove('active');
  //비노출--
  setTimeout(function(){
      gnb.classList.remove('open');
  },300);
};
