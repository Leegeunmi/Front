'use strict'//엄격히 사용하겠다.

// setTimeout : 만료된 후 함수나 지정한 코드조각을 실행하는 타이머 설정.(전역변수)(메서드)

// let setTimeNum; //변수를 만들고 변수안에 setTimeout을 담는다.
// setTimeNum = setTimeout(function(){//일정시간 이후 로직을 작동 시킨다.
//   alert('this is timeout');
// },3000);//3초 후 작동
//
// clearTimeout(setTimeNum);//setTimeout 정지한다.

//-----------------------------------------------------------------------------------

let setTimeNum;
let num = prompt('숫자를 입력하세요.');
setTimeNum = setTimeout(function(){//일정시간 이후 로직을 작동 시킨다.
  alert('this is timeout');
},3000);//3초 후 작동

if(num > 10){
    clearTimeout(setTimeNum);//setTimeout 정지한다.
    alert('setTimeout 정지하였습니다.');
}else{
  alert('setTimeout 실행하였습니다.');
}


// setTimeNum = setTimeout(function(){},2000);
