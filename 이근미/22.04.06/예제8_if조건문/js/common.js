'use strict'
//if test
let x = prompt('x 입력하세요.');
let y = prompt('y 입력하세요.');
x = Number(x);
y = Number(y);
console.log(typeof(x),typeof(y)); //-> string
console.log(`x의 아스키코드 값: ${x.charCodeAt(0)}, y의 아스키코드 값: ${y.charCodeAt(0)}`); //-> 0은 인덱스번호 (0번째 자리)
alert(`입력값이 입력완료 되었습니다. x값은 ${x} y값은 ${y}입니다.`)

//조건문
if ( x == y ) { // == 값이 같다. === 데이터타입도 같다.
  alert('x는 y와 같습니다.');
}else if ( x > y ) {
  alert('x는 y보다 큽니다.');
}else {
  alert('x는 y보다 작습니다.');
}

// x와 y는 string타입인데 숫자비교가 가능한 이유
// 아스키코드로 변환하여 비교연산을 하는 것이다.
// 실질적으로 내가 입력한 숫자를 연산하려면 타입변환을 해야한다.


//과일구매하기 ---------------------------------------------
const myMoney = 10000;
let fruitX = prompt('사과의 가격을 입력해주세요.','숫자입력');
let fruitY = prompt('배의 가격을 입력해주세요.','숫자입력');
let total = Number(fruitX) + Number(fruitY);

alert(`사과의 가격은 ${fruitX}원이고, 배의 가격은 ${fruitY}원입니다.\n총 지불금액은 ${total}원 입니다.`);

if (total > myMoney) {
  alert('돈이 모자라네요..( °̥̥̥̥̥̥̥̥◡͐°̥̥̥̥̥̥̥̥)ㅎ')
}else if (total < myMoney) {
  alert('잘 먹겠습니다!٩( ᐛ )و')
}else {
  alert('차비없어요..깎아주세요٩( ′ㅂ`)و ̑̑')
}


//연산을 할 때는 string타입인지 number타입인지 체크해야한다.
