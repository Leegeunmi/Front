window.onload = function(){ //window : 도큐먼트를 다 감싸고 있는 객체
  //실행문
  var height, age, score, heightAvg, ageAvg, scoreAvg, heightTotal, ageTotal, scoreTotal, count;
  var countLeng = 5;
  var name_1, name_2, name_3, name_4, name_5;

  name_1 = '홍길동';
  name_2 = '가길동';
  name_3 = '나길동';
  name_4 = '다길동';
  name_5 = '라길동';

  var age_1, age_2, age_3, age_4, age_5;
  age_1 = 30;
  age_2 = 25;
  age_3 = 33;
  age_4 = 27;
  age_5 = 22;
  ageTotal = age_1 + age_2 + age_3 + age_4 + age_5;
  ageAvg = ageTotal / countLeng;

  var height_1, height_2, height_3, height_4, height_5;
  height_1 = 180;
  height_2 = 190;
  height_3 = 175;
  height_4 = 160;
  height_5 = 185;
  heightTotal = height_1 + height_2 + height_3 + height_4 + height_5;
  heightAvg = heightTotal / countLeng;

  var score_1, score_2, score_3,scoret_4, score_5;
  score_1 = 80;
  score_2 = 90;
  score_3 = 75;
  score_4 = 60;
  score_5 = 85;
  scoreTotal = score_1 + score_2 + score_3 + score_4 + score_5;
  scoreAvg = scoreTotal / countLeng;

  var list = '<table>';
  list += '<tr><th>이름</th><th>나이</th><th>키</th><th>점수</th></tr>'
  list += '<tr><td>'+ name_1 +'</td><td>'+ age_1 +'</td><td>'+ height_1 +'</td><td>'+ score_1 +'</td></tr>'
  list += '<tr><td>'+ name_2 +'</td><td>'+ age_2 +'</td><td>'+ height_2 +'</td><td>'+ score_2 +'</td></tr>'
  list += '<tr><td>'+ name_3 +'</td><td>'+ age_3 +'</td><td>'+ height_3 +'</td><td>'+ score_3 +'</td></tr>'
  list += '<tr><td>'+ name_4 +'</td><td>'+ age_4 +'</td><td>'+ height_4 +'</td><td>'+ score_4 +'</td></tr>'
  list += '<tr><td>'+ name_5 +'</td><td>'+ age_5 +'</td><td>'+ height_5 +'</td><td>'+ score_5 +'</td></tr>'
  list += '</table>';

  console.log(list)
  document.body.innerHTML = list;
}




// var height, age, score, heightAvg, ageAvg, scoreAvg, heightTotal, ageTotal, scoreTotal, count;
// var count = 5;
//
// 홍길동age = 30;
// 박길동age = 18;
// 김길동age = 21;
// 이길동age = 35;
// 최길동age = 38;
// ageTotal = 홍길동age + 박길동age + 김길동age + 이길동age + 최길동age;
// console.log(`나이 합: ${ageTotal}`);
// ageAvg = ageTotal / count;
// console.log(`나이 평균: ${ageAvg}`);
//
// 홍길동height = 175;
// 박길동height = 180;
// 김길동height = 190;
// 이길동height = 185;
// 최길동height = 178;
// heightTotal = 홍길동height + 박길동height + 김길동height + 이길동height + 최길동height;
// console.log(`키 합: ${heightTotal}`);
// heightAvg = heightTotal / count;
// console.log(`키 평균: ${heightAvg}`);
//
// 홍길동score = 85;
// 박길동score = 88;
// 김길동score = 90;
// 이길동score = 95;
// 최길동score = 95;
// scoreTotal = 홍길동score + 박길동score + 김길동score + 이길동score + 최길동score;
// console.log(`점수 합: ${scoreTotal}`);
// scoreAvg = scoreTotal / count;
// console.log(`점수 평균: ${scoreAvg}`);
//
// var table_a = '';
//
// table_a += '<table>';
// table_a += '<tr>';
// table_a += '<th>이름</th><th>나이</th><th>키</th><th>점수</th>'
// table_a += '</tr>';
// table_a += '<tr>';
// table_a += '<td>홍길동</td><td>30</td><td>175</td><td>85</td>'
// table_a += '</tr>';
// table_a += '<tr>';
// table_a += '<td>박길동</td><td>18</td><td>180</td><td>88</td>'
// table_a += '</tr>';
// table_a += '<tr>';
// table_a += '<td>김길동</td><td>21</td><td>190</td><td>90</td>'
// table_a += '</tr>';
// table_a += '<tr>';
// table_a += '<td>이길동</td><td>35</td><td>185</td><td>95</td>'
// table_a += '</tr>';
// table_a += '<tr>';
// table_a += '<td>최길동</td><td>38</td><td>178</td><td>95</td>'
// table_a += '</tr>';
// table_a += '<tr>';
// table_a += '<td>평균</td><td>28.4</td><td>181.6</td><td>90.6</td>'
// table_a += '</tr>';
// table_a += '</table>';
//
// console.log(table_a);
// document.body.innerHTML = table_a;
