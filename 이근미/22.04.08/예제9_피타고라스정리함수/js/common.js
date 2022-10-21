'use strict'
// 함수선언
function square(x){
  return x * x;
}

function pytha(width, heigth){ //피타고라스 연산 함수
  `${square(width)},${square(heigth)}`
  return Math.sqrt(square(width)+square(heigth));
}
console.log(pytha(3,4));
