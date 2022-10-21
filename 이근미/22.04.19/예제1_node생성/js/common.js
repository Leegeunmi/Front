'use strict'
window.onload = function() {
  init(); //window가 로드된 이후 초기화 코드
}

function init() {
  let btn = document.createElement('div'); //div태그생성
  btn.id = 'btn';
  btn.removeAttribute('id'); //생성한 id지우기
  console.log(btn);
  document.body.append(btn);


  let text = document.createTextNode('click!'); //text node는 text node자체를 생성
  btn.append(text); //btn에 text넣기
  console.log(text);


  let contain = document.createElement('div'); //div태그생성
  //contain요소에 wrap class추가하기
  contain.classList.add('wrap');
  contain.append(btn);
  console.log(contain);
  document.body.append(contain);


  let divBox = document.createElement('div');
  divBox.prepend(document.createTextNode('div-box'));
  document.body.append(divBox);



  // 1. input element node 생성
  // 2. 1번 요소에 id추가 'male'
  // 3. 1번 요소에 type속성추가 'checkbox' (가져올때 - getAttibute 만들때 - setAttribute)
  // 4. wrap 요소에 추가 (contain변수 활용)
  // --------------------------------------
  // 5. label element node 생성
  // 6. 5번 요소에 id추가 'gender'
  // 7. 5번 요소에 for속성 추가 'male'
  // 8. 5번 요소에 text추가 '남성'
  // 9. wrap 요소에 추가 (conttain변수 활용)


  // let input = document.createElement('input');
  // input.id = 'male';
  // input.id.setAttribute('type', 'checkbox');
  //
  // let contain = document.createElement('div');
  // contain.classList.add('wrap');
  // contain.append(input);
  // contain.append(label);
  // console.log(contain);
  // document.body.append(contain);
  //
  // let label = document.createElement('label');
  // label.id = 'gender';
  // label.id.setAttribute('dor', 'male');
  // label.createTextNode('남성');
  //



  // //teacher---
  // //첫번째 input태그추가
  // let inputText = document.createElement('input');
  // inputText.id = 'male';
  // inputText.setAttribute('type', 'checkbox'); //(이름,값) //생성되고 있는 도중이기 때문에 getElementById하면 안된다.
  // contain.prepend(inputText);
  // console.log(inputText);
  //
  // //첫번째 label태그추가
  // let inputLabel = document.createElement('label');
  // inputLabel.id = 'gender';
  // inputLabel.setAttribute('for','male');
  // inputLabel.append(document.createTextNode('남성'));
  // contain.prepend(inputLabel);
  // console.log(inputLabel);
  //
  //
  // //두번째 input태그추가
  // let inputText2 = document.createElement('input');
  // inputText2.id = 'male';
  // inputText2.setAttribute('type', 'checkbox'); //(이름,값) //생성되고 있는 도중이기 때문에 getElementById하면 안된다.
  // contain.prepend(inputText2);
  //
  // //두번째 label태그추가
  // let inputLabel2 = document.createElement('label');
  // inputLabel2.id = 'gender';
  // inputLabel2.setAttribute('for','female');
  // inputLabel2.append(document.createTextNode('여성'));
  // contain.prepend(inputLabel2);


  //공통코드부분 함수로 만들기-----------------------------------------------------
  function inputFunc(id,typeValue){
    let inputText = document.createElement('input');
    inputText.id = id;
    inputText.setAttribute('type',typeValue);
    contain.prepend(inputText);
    return inputText;
  }


  function inputFunc2(id,forValue,text){
    let inputLabel = document.createElement('lebel');
    inputLabel.id = id;
    inputLabel.setAttribute('for',forValue);
    inputLabel.append(document.createTextNode(text));
    contain.prepend(inputLabel);
    return inputLabel;
  }
  // console.log(inputFunc('male','chackbox'));
  // console.log(inputFunc('gender','male','남성'));

  console.log(inputFunc('male','checkbox'));
  console.log(inputFunc2('gender','male','남성'));
  console.log(inputFunc('female','checkbox'));
  console.log(inputFunc2('gender','female','여성'));
  // inputFunc('male','checkbox');
  // inputFunc2('gender','male','남성');
  // inputFunc('female','checkbox');
  // inputFunc2('gender','female','여성');




//   //teacher---공통코드부분 함수로 만들기
// console.log(createElement('male','checkbox'));
//
//   function createInputFunc(id,type){
//     let inputText = document.createElement('input');
//     inputText.id = id;
//     inputLabel.setAttribute('type',type); //inputText.type == inputText.setAttribute('type','checkbox'); (type의 이름을 변경할 때는 setAttribute사용)
//     contain.prepend(inputText);
//   }
//
//
//   function inputFunc2(id,type,textNode){
//     let inputLabel = document.createElement('lebel');
//     inputLabel.id = id;
//     inputLabel.setAttribute('for',type);
//     inputLabel.append(document.createTextNode(textNode));
//     contain.prepend(inputLabel);
//     console.log(inputLabel);
//   }
//
//   inputFunc('male','checkbox');
//   inputFunc2('gender','male','남성');
//   inputFunc('female','checkbox');
//   inputFunc2('gender','female','여성');
}
