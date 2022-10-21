// 'use strict'
// //me---
// window.onload = function() {
//   let infoText = 'javascript, html, css, photoshop, xd';
//   let aHtml = '<h1>My skilll</h1>';
//
//   /*infoText를 substring으로 단어를 개별 추출하고 해당값을
//   배열에 담아 aHtml의 변수에 반복구문을 사용하여서 추가(list ul li)한 후
//   document에 있는 요소 .demo element에 출력.*/
//
//   let skill_1 = infoText.substring(0, 10);
//   let skill_2 = infoText.substring(12, 16);
//   let skill_3 = infoText.substring(18, 21);
//   let skill_4 = infoText.substring(23, 32);
//   let skill_5 = infoText.substring(34, 36);
//
//   let skill = [skill_1, skill_2, skill_3, skill_4, skill_5];
//
//
//   aHtml += '<ul>';
//   for (let i = 0; i < skill.length; i++) {
//     aHtml += '<li>' + skill[i] + '</li>';
//   }
//   aHtml += '</ul>';
//   console.log(document.getElementsByClassName('demo'));
//   function getList() {
//     let domList = document.getElementsByClassName('demo')[0];
//     domList.innerHTML = aHtml;
//   }
//   getList();
// }


// teacher1---
'use strict'
window.onload = function(){
  let infoText = 'javascript, html, css, photoshop, xd';
  let aHtml = '<h1>My skilll</h1>';

  /*infoText를 substring으로 단어를 개별 추출하고 해당값을
  배열에 담아 aHtml의 변수에 반복구문을 사용하여서 추가(list ul li)한 후
  document에 있는 요소 .demo element에 출력.*/

  let str = [];
  str.push(infoText.substring(0,10));
  str.push(infoText.substring(12,16));
  str.push(infoText.substring(18,21));
  str.push(infoText.substring(23,32));
  str.push(infoText.substring(34,36));
  console.log(str);

  aHtml += '<ul>';
  for(let i = 0; i < str.length; i++){
    console.log(str[i]);
    aHtml += '<li>' + str[i] + '</li>';
  }
  aHtml += '</ul>';
  console.log(aHtml);
  document.getElementsByClassName('demo')[0].innerHTML = aHtml;
}


// // teacher1---
// 'use strict'
// window.onload = function(){
//   let infoText = 'javascript, html, css, photoshop, xd';
//   let aHtml = '<h1>My skilll</h1>';
//
//   /*infoText를 substring으로 단어를 개별 추출하고 해당값을
//   배열에 담아 aHtml의 변수에 반복구문을 사용하여서 추가(list ul li)한 후
//   document에 있는 요소 .demo element에 출력.*/
//
//   let str = [];
//   str.push(infoText.substring(0,10));
//   str.push(infoText.substring(12,16));
//   str.push(infoText.substring(18,21));
//   str.push(infoText.substring(23,32));
//   str.push(infoText.substring(34,36));
//   console.log(str);
//
//   aHtml += '<ul>';
//   for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
//     aHtml += '<li>'+(i+1)+ '. ' + str[i] + '</li>';
//   }
//   aHtml += '</ul>';
//   console.log(aHtml);
//   document.getElementsByClassName('demo')[0].innerHTML = aHtml;
// }
