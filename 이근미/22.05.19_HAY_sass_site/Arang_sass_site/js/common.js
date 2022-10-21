"use strict";
$(function() {
  function splitLocation(el) {
    let href = el.attr("href").split("/");
    href = href[href.length - 1].split(".");
    href = href[0];
    return href;
  }

  let currentHref = splitLocation($(location));

  $("#lnb a").each(function() {
    if (splitLocation($(this)) == currentHref) {
      $(this).addClass("on");
    }
  });

  // script 영역 아코디언 UI 인터렉션 만들기 예제
  $(".accodion dd:not(:first)").css({
    "display": "none",
    "height": 0
  })
  $(".accodion dl dt").click(function() {
    let thisElem = $(this);
    console.log(thisElem);
    if ($("+dd", thisElem).css("display") == "none") {
      let isAni = $("dd").is(":animated");
      if (!isAni) {
        $(".accodion dd").each(function() {
          if (parseInt($(this).css("height")) == 300) {
            $(this).animate({
              height: 0
            }, 300, function() {
              $(this).css("display", "none");
            });
          }
        });
        $(".accodion dl dt").removeClass("active");
        $(thisElem).addClass("active");
        $("+dd", thisElem).css("display", "block").animate({
          height: 300
        });
      }
    }
  });

  //Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
