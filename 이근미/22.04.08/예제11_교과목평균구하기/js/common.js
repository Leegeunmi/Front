'use strict'
//1)교과목 평균구하기
//배열선언
let korean = [80,55,65,88,70,60,50,60,70,80]
let math = [65,45,65,98,80,50,60,70,80,90]
let english = [80,55,65,88,70,60,50,60,70,80]

function avgFun(arrayNum){
  let total = 0; //점수합계
  let scoreLeng = arrayNum.length; //인덱스 개수 : 학생들 점수
  let scoreAvg; //학생들의 평균 점수
  for(let i = 0; i < scoreLeng; i++){
    total += arrayNum[i];
  }
  return scoreAvg = total / scoreLeng;
}
console.log(`국어평균점수: ${avgFun(korean)}`);
console.log(`수학평균점수: ${avgFun(math)}`);
console.log(`영어평균점수: ${avgFun(english)}`);

//'국어 평균 점수:  수학평균점수: 영어평균점수:'
