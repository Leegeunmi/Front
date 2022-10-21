'use strict'

let inputText = prompt(`숫자를 입력하세요.`,`숫자`);
console.log(inputText, typeof(inputText));
if (inputText === `숫자` || inputText === '') { //조건 A or B 둘 중 하나라도 참(true)이라면 조건문의 실행블럭을 실행한다.
  alert(`입력된 숫자가 없습니다.`);
}
inputText = Number(inputText);
console.log(inputText);
if ( isNaN(inputText) ) { //어떤값이 NaN인지 판별 (NaN : not a number)
  alert(`숫자를 입력해주세요.`)
}
else if (inputText > 0) {
    alert(`입력하신 숫자 ${inputText}은 양수입니다.`)
}
else if (inputText < 0) {
    alert(`입력하신 숫자 ${inputText}은 양수입니다.`)
}
