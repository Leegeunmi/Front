'use strict'
function timeText(){
  let x = document.getElementById('txt');
  // console.log(x.value);
  // x.value = 'this is setTimeout';
  setTimeout(function(){ x.value = '2초' },2000);
  setTimeout(function(){ x.value = '3초' },3000);
  setTimeout(function(){ x.value = '4초' },4000);
  setTimeout(function(){ x.value = '5초' },5000);
}
