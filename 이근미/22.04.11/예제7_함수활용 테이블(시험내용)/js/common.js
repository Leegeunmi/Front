'use strict'
window.onload = function() {
  let name = ['홍길동','김길동','박길동','이길동','최길동'];
  let age = [30,22,19,24,26];
  let height = [190,178,165,170,180];
  let score = [85,90,89,99,100];
  // console.log(name); //중간확인
  // console.log(age);
  // console.log(height);
  // console.log(score);

  // 평균 구하는 함수
  function avgFunc(arrayNum){
    let total = 0;
    let scoreLeng = arrayNum.length;
    let scoreAvg;
    for(let i = 0; i < scoreLeng; i++){
      total += arrayNum[i];
    }
    scoreAvg = total/scoreLeng;
    return scoreAvg = Math.ceil(scoreAvg);
  }
  // console.log(avgFunc(age)); //중간확인
  // console.log(avgFunc(height));
  // console.log(avgFunc(score));

  //올림으로 처리하시오. ceil
  //반올림으로 처리하시오. round
  //버림으로 처리하시오. floor
  // Math.ceil(avgFunc(score))

  console.log(`나이 평균:${avgFunc(age)}, 키 평균:${avgFunc(age)}, 점수 평균:${avgFunc(age)}`);

//document에 text 출력
let list = '<table>';
list += '<tr><th>이름</th><th>나이</th><th>키</th><th>점수</th></tr>';
for(let i = 0; i < name.length; i++ ){
  list += '<tr><td>'+name[i]+'</td><td>'+age[i]+'</td><td>'+height[i]+'</td><td>'+score[i]+'</td></tr>';
}
list += '<tr><th>평균</th><th>'+avgFunc(age)+'</th><th>'+avgFunc(height)+'</th><th>'+avgFunc(score)+'</th></tr>';
list += '</table>';


//출력방식2,3)
// let domDiv = document.getElementsByTagName('div')[0];
// console.log(domDiv);
// domDiv.innerHTML = list;

// let domTable = document.getElementsByClassName('table-wrap')[0];
// console.log(domTable);
// domTable.innerHTML = list;


//-----------------------------------------------------------------------------------------
//(me)
// function listOutPut(){
//   let domTable = document.getElementsByClassName('table-wrap')[0];
//   let btnSelect = document.getElementById('get-info');
//   btnSelect.addEventListener('click',function(){ domTable.innerHTML = list; })
// }
// listOutPut('get-info','table-wrap');

//(teacher)
function getTable(){
  let domTable = document.getElementsByClassName('table-wrap')[0];
  domTable.innerHTML = list;
}
document.getElementById('get-info').addEventListener('click',getTable);
//-----------------------------------------------------------------------------------------



//출력방식1)
// console.log(list);
// document.getElementById('table-wrap').innerHTML = list;
}
