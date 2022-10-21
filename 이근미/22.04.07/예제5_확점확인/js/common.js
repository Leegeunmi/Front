'use strict'
let name = prompt(`이름을 입력해주세요.`);
let score = prompt(`학점을 입력해주세요.`,`숫자`);
if (score === `숫자` || score === ``) {
  alert(`입력된 숫자가 없습니다.`);
}else {
  score = Number(score);
  if (isNaN(score)) { //문자열(string)과 숫자(number)를 구분하는 함수를 사용한 조건문
    alert(`영문자/한글/특수문자는 사용할 수 없습니다. 숫자를 입력해주세요.`);
  }
  else if (score == 0) {
    alert(`${name}님의 학점은 F 입니다. 재수강 신청하세요!`);
  }
  else if (score <= 0.8) {
    alert(`${name}님의 학점은 D-입니다.`);
  }
  else if (score <= 1.1) {
    alert(`${name}님의 학점은 D입니다.`);
  }
  else if (score <= 1.4) {
    alert(`${name}님의 학점은 D+입니다.`);
  }
  else if (score <= 1.8) {
    alert(`${name}님의 학점은 C-입니다.`);
  }
  else if (score <= 2.1) {
    alert(`${name}님의 학점은 C입니다.`);
  }
  else if (score <= 2.4) {
    alert(`${name}님의 학점은 C+입니다.`);
  }
  else if (score <= 2.8) {
    alert(`${name}님의 학점은 B-입니다.`);
  }
  else if (score <= 3.1) {
    alert(`${name}님의 학점은 B입니다.`);
  }
  else if (score <= 3.4) {
    alert(`${name}님의 학점은 B+입니다.`);
  }
  else if (score <= 3.8) {
    alert(`${name}님의 학점은 A-입니다.`);
  }
  else if (score <= 4.2) {
    alert(`${name}님의 학점은 A입니다.`);
  }
  else if (score <= 4.5) {
    alert(`${name}님의 학점은 A+입니다.`);
  }
  else {
    alert(`학점의 범위는 0부터 4.5까지입니다. 다시 시도해주세요.`)
  }
}
