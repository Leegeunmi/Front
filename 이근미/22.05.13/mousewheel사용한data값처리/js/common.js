// 'use strict'
// $(function(){
//   let windowHeight = $(window).innerHeight();
//   let direction = 0; //방향전환을 위한 변수정의
//   let maxDirection = $('.wheel-wrap section').length - 1;
//   // console.log(maxDirection);
//   let wheelAction = false;
//   $(window).on('wheel',function(event){
//     console.log(event.originalEvent.wheelDelta);
//     let eventDelta = event.originalEvent.wheelDelta;
//     if(eventDelta > 0 && wheelAction == false){
//       console.log('wheel up!');
//       if(direction <= 0){
//         direction = 0;
//       }else {
//         direction--;
//         console.log(direction);
//         $('html').animate({scrollTop: direction*windowHeight},
//         {duration: 700,
//         start: function(){
//           wheelAction = true;
//         },
//         complete: function(){
//           wheelAction = false;
//         }
//       });
//       }
//     }else if(eventDelta < 0 && wheelAction == false){
//       console.log('wheel down!');
//       if(direction >= 5){
//         direction = 5;
//       }else {
//         direction++;
//         console.log(direction);
//         $('html').animate({scrollTop: direction*windowHeight},
//         {duration: 700,
//         start: function(){
//           wheelAction = true;
//         },
//         complete: function(){
//           wheelAction = false;
//         }
//       });
//       }
//     }
//   });
// });




// //리팩토링 --(중복코드 함수화하기)
// 'use strict'
// $(function(){
//   let windowHeight = $(window).innerHeight();
//   let direction = 0;
//   let maxDirection = $('.wheel-wrap section').length - 1;
//   let wheelAction = false;
//
//   $(window).on('wheel',function(event){
//     let eventDelta = event.originalEvent.wheelDelta;
//     if(eventDelta > 0 && wheelAction == false){
//       if(direction <= 0){
//         direction = 0;
//       }else {
//         direction--;
//         wheelMove('html');
//       }
//     }else if(eventDelta < 0 && wheelAction == false){
//       if(direction >= 5){
//         direction = 5;
//       }else {
//         direction++;
//         wheelMove('html');
//       }
//     }
//   });
//   function wheelMove(element) {
//     $(element).animate({scrollTop: direction*windowHeight},
//     {duration: 1000,
//     start: function(){
//       wheelAction = true;
//     },
//     complete: function(){
//       wheelAction = false;
//     }
//   });
//   }
// });





//리팩토링 --(중복코드 함수화하기)
'use strict'
$(function(){
  let windowHeight = $(window).innerHeight();
  let direction = 0;
  let maxDirection = $('.wheel-wrap section').length - 1;
  let wheelAction = false;
  function wheelMove() {
    $('html').animate({scrollTop: direction*windowHeight},
      {duration: 1000,
        start: function(){
          wheelAction = true;
        },
        complete: function(){
          wheelAction = false;
        }
      });
    }
    wheelMove();

  $(window).on('wheel',function(event){
    let eventDelta = event.originalEvent.wheelDelta;
    if(eventDelta > 0 && wheelAction == false){
      if(direction <= 0){
        direction = 0;
      }else {
        direction--;
        wheelMove();
      }
    }else if(eventDelta < 0 && wheelAction == false){
      if(direction >= maxDirection){
        // direction = maxDirection;
        direction++;
        console.log(direction);
      }else {
        direction++;
        console.log(direction);
        wheelMove();
      }
    }
  });
});
