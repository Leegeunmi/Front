'use strict'
// 배열 선언
// let array = [123, 456, 789];
// let lastIndex = array.length -1
// console.log(array) // -> (3) [123, 456, 789] 배열의 길이와 인덱스 값을 알려준다.
// console.log([2]);
// console.log(array[2]);
// console.log(`----------------------------------------------`);
// console.log(array.length -1);
// console.log(`첫번째 배열값은 ${array[0]}입니다.`);
// console.log(`마지막 배열값은 ${array[lastIndex]}입니다.`);



// let inputText = prompt(`과일을 입력해주세요.`,`과일명`);
const myfruits = '배';
let count = 0;
let fruits = ['사과', '배', '수박', '포도'];
// fruits.push('딸기','오렌지'); //배열의 마지막에 요소를 추가
// console.log(fruits);
//
// fruits.pop(`오렌지`); //배열의 마지막 요소를 삭제
// console.log(fruits);
//
// fruits.pop();
// console.log(fruits);
//
// fruits.shift(); //배열의 첫번째 요소를 추출하고 삭제
// console.log(fruits.shift());
// console.log(fruits);
//
// fruits.unshift(`오렌지`); //배열의 첫번째에 요소를 추가
// console.log(fruits);
//
//
//
// // fruits.splice(); //배열의 어느자리에 무엇을 넣을지 정하여 추가
// fruits.splice(0, 0, `키위`); //(= unshift) 배열의 첫번째 인자에 요소 추가
// console.log(fruits);
//
// console.log(fruits.length); //배열의 요소 수
// fruits.splice(fruits.length, 0, '메론'); //(= push) 배열의 마지막 인자에 요소 추가
// // == fruits.splice(4, 0, '레몬');
// console.log(fruits);
//
// fruits.splice(4, 1, '자몽'); //배열의 (5번째)마지막 인자의 자리의 요소 교체
// console.log(fruits);

// alert(`총 과일의 개수는 ${fruits.length}개 입니다.`)



// ~() 함수  ~() 메서드==매개변수  _함수가 더 포괄적이다.

//함수를 선언한다.
//재귀함수 : 하나의 함수를 반복하여 작동하는 함수
function checkFunc() {
  // 실행코드 작성 영역
  //console.log(`this is function`);
  //checkFunc() //내부에서 호출을 하면 무한반복한다. break가 필요
  if (count < fruits.length) {
    console.log(fruits[count]);
    if (myfruits == fruits[count]) {
      console.log(`${fruits[count]}는 제가 좋아하는 과일 입니다.`);
    }
    count++;
    checkFunc();
  } else {
    alert(`더 이상 과일이 없습니다.`);
  }
}

//함수를 호출한다.
checkFunc();
