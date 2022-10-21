// 평균구하기
// var score_1, score_2, score_3, score_4, score_5, leng, total, avg //leng개수 total점수합 avg점수평균
// score_1 = 85;
// score_2 = 90;
// score_3 = 100;
// score_4 = 70;
// score_5 = 75;
// leng = 5;
// total = score_1+score_2+score_3+score_4+score_5;
// avg = total / leng;
// console.log(score_1,score_2,score_3,score_4,score_5);
// console.log(`점수 개수 : ${leng}`);
// console.log(`점수 총합 : ${total}`);
// console.log(`점수 평균 : ${avg}`);

// 나이 키 평균 구하기
var heightTotal, ageTotal, heightAvg, ageAvg;
var countLeng = 10;
// 키 변수 선언
height_1 = 175;
height_2 = 180;
height_3 = 182;
height_4 = 190;
height_5 = 185;
height_6 = 179;
height_7 = 182;
height_8 = 183;
height_9 = 192;
height_10 = 187;
// 나이 변수 선언
age_1 = 32;
age_2 = 44;
age_3 = 21;
age_4 = 18;
age_5 = 52;
age_6 = 22;
age_7 = 45;
age_8 = 25;
age_9 = 38;
age_10 = 28;

// 키 합산
heightTotal = height_1 + height_2 + height_3 + height_4 + height_5 + height_6 + height_7 + height_8 + height_9 + height_10;
console.log(`키 합: ${heightTotal}`);
// 나이 합산
ageTotal = age_1 + age_2 + age_3 + age_4 + age_5 + age_6 + age_7 + age_8 + age_9 + age_10;
console.log(`나이 합: ${ageTotal}`);
// 키 평균
heightAvg = heightTotal / countLeng;
console.log(`키 평균: ${heightAvg}`);
// 나이 평균
ageAvg = ageTotal / countLeng;
console.log(`나이 평균: ${ageAvg}`);

//alert 출력
//평균 키는 ***cm입니다.
//평균 나이는 ***cm입니다.
alert(`평균 키는 ${heightAvg}cm입니다.
평균 나이는 ${ageAvg}살입니다.`)
