'use strict'
//attribute----
// let x = document.querySelectorAll('div')[0].getAttribute('id');
// console.log(document.querySelectorAll('div')[0]);
// console.log(x);

let num = document.querySelector(".container > div").getAttribute('class');
// console.log(num);


// 로고 href 속성 값 가져오기----
// let hrefNum = document.querySelector('h1 a').getAttribute('href');
let hrefNum = document.querySelector('h1 a');
// hrefNum.setAttribute('href','http://daum.net'); //네이버였던 주소를 다음으로 바꿈
// console.log(hrefNum);
//get <=> set 서로 반대의미
//setAttribute의 첫번째 인자는 속성의 name값이고 두번째 인자는 속성의 값을 입력한다.
hrefNum.setAttribute('class','link');
// console.log(hrefNum.getAttribute('href'));


//href 속성값을 가져와서 split로 naver(글자)를 추출하기---
let siteSrc = hrefNum.getAttribute('href').split('//');
console.log(siteSrc[1]);
let name = siteSrc[1].split('.');
console.log(name[0]);
// alert(`현재 방문하신 사이트는 ${name[0]}입니다.`);

// window.location.href = 'http://naver.com';


//입력한 단어와 관련된 사이트로 이동하는 로직
function locationFunc() {
  let thisHref = window.location;
  let numText = document.querySelector('#location').value;
  console.log(numText);
  thisHref.href = `http://${numText}.com`; //.com사이트들 검색가능
  thisHref.href = `http://${numText}.net`; //.net사이트들 검색가능
  thisHref.href = `http://${numText}.co.kr`; //.co.kr사이트들 검색가능
}
