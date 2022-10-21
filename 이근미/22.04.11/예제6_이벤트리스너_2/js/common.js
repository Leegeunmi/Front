'use strict'
let outPutText = '';

function getText(){
  if(outPutText == ''){ //입력된 값이 없을때, 초기화 값일때,
    outPutText += document.getElementById('fname').value; // .value (input태그의 것) 입력된 값을 가져오곘다.
  }else{
    outPutText += '<br>' + document.getElementById('fname').value;
  }
  document.getElementById('textarea').innerHTML = outPutText;
}

let domStyle = document.getElementById('textarea').style; //(style)값을 가져오겠다.
console.log(typeof(domStyle));// object 객체타입
domStyle.backgroundColor = 'red';
domStyle.color = 'white';
domStyle.fontSize = '32px';
domStyle.border = '3px solid blue';
domStyle.display = 'inline-block';
console.log(domStyle);
document.getElementById('btn').addEventListener('click',getText);
