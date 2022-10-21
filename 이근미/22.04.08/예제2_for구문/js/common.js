'use strict'
// < for 구문 >
//배열 선언방법 1>
// let arrayFruits = new Array(); //생성자로 배열 생성
// arrayFruits.push('사과','배','수박','포도','키위','레몬');
//배열 선언방법 2>

//1)
// let arrayFruits = ['사과','배','수박','포도','키위','레몬'];
// console.log(arrayFruits);
// for(let i = 0; i < arrayFruits.length; i++){
//   console.log(`${i+1}.${arrayFruits[i]}`);
// }

//2)
// let choice = prompt('과일명을 입력하세요.');
// let arrayFruits = ['사과','배','수박','포도','키위','레몬'];
// for(let i = 0; i < arrayFruits.length; i++){
//   if(choice == arrayFruits[i]){
//     alert(`당신이 선택한 과일은 ${arrayFruits[i]}입니다.`);
//   }
// }


// 3) 특정 구간에서 for구 정지
// let outPut = '';
// for (var i = 0; i < 10; i++) {
//   //실행구문
//   outPut += '@';
//   console.log(outPut);
//   if (i == 5) {
//     console.log('여섯번째입니다.');
//     break;
//   }
// }


//4) 재고확인
let arrayFruits = ['사과', '배', '수박', '포도', '키위', '레몬'];
let inputText = prompt('과일명을 입력해주세요.');
let check = 0; //재고가 없다 == 0  재고가 있다 == 1
for (var i = arrayFruits.length - 1; i >= 0; i--) { //배열인덱스가 0부터 시작하기 때문에 : 0 ~ 5 이렇게 6개 이므로 length - 1 한다.
  //실행구문
  if (inputText == arrayFruits[i]) {
    alert(`맛있는 ${arrayFruits[i]}`);
    check = 1;
    break;
  } else if (i == 0) { //재고확인을 마친 마지막 i 값
    console.log(`재고여부:${check}`);
    if (check == 0) { // check != 1
      alert(`해당상품의 재고가 없습니다.`);
    }
  }
}
