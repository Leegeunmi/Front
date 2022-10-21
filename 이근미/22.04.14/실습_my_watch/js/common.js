'use strict'
let t = null;

function startTime() {
  let today = new Date(); //날짜 생성자;
  let h = today.getHours(); //시간
  let m = today.getMinutes(); //분
  let s = today.getSeconds(); //초

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  function checkTime(i) { //일의 자리에 '0'을 포함시키는 함수
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  //구간설정//
  if (h >= 7 && h <= 8) {
    document.getElementById('txt').innerHTML = `<p>Good Morning</P>${h} : ${m} : ${s}`;
    document.getElementById("txt").style.color = "#304978";
    document.body.style.backgroundImage = 'url(./img/bg_morning1.png)';
    document.body.style.backgroundColor = '#98c1ff';
    document.querySelector('#sun').style.display = 'none';
    document.querySelector('#star').style.display = 'none';
    document.querySelector('#flower').style.display = 'block';
    document.querySelector('#flower').setAttribute('src', './img/flower.png')

  } else if (h >= 9 && h <= 21) {
    document.getElementById('txt').innerHTML = `<p>Have a Nice Day</P>${h} : ${m} : ${s}`;
    document.getElementById("txt").style.color = "#ff4e18";
    document.body.style.backgroundImage = 'url(./img/bg_day1.png)';
    document.body.style.backgroundColor = '#31ae36';
    document.querySelector('#flower').style.display = 'none';
    document.querySelector('#star').style.display = 'none';
    document.querySelector('#sun').style.display = 'block';
    document.querySelector('#sun').setAttribute('src', './img/sun.png')

  } else {
    document.getElementById('txt').innerHTML = `<p>Good Night</P>${h} : ${m} : ${s}`;
    document.getElementById("txt").style.color = "#a0aa27";
    document.body.style.backgroundImage = 'url(./img/bg_night1.png)';
    document.body.style.backgroundColor = '#373730';
    document.querySelector('#sun').style.display = 'none';
    document.querySelector('#flower').style.display = 'none';
    document.querySelector('#star').style.display = 'block';
    document.querySelector('#star').setAttribute('src', './img/star.png')
  }
  t = setTimeout(startTime, 1000);
}
startTime();


let elem = document.getElementsByClassName('sticker')[0];
let xMove = 0;
let yMove = 0;
let xDirection = 1;
let yDirection = 1;
let moveInterval = setInterval(move, 1);

function move() {
  xMove = xMove + 1 * xDirection;
  yMove = yMove + 1 * yDirection;
  if (xMove > window.innerWidth - 230 || xMove < 0) {
    xDirection = xDirection * (-1);
  }
  if (yMove > window.innerHeight - 230 || yMove < 0) {
    yDirection = yDirection * (-1);
  }
  elem.style.left = `${xMove}px`;
  elem.style.top = `${yMove}px`;
}
