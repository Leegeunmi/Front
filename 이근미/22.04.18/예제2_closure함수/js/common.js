'use strict'
// 1)------------------
function outFunc(a) {
  let outerText = a;
  console.log(outerText);
  function innerFunc(){
    let innerText = 'inner-text';
    console.log(`${outerText},${innerText}`);
  }
  innerFunc();
}
outFunc('저는 외부함수입니다.');


// 2)------------------
function outFunc(a) {
  let outerText = 'outer-text';
  function innerFunc(num){ //선언부분
    let innerText = num;
    console.log(`${outerText},${innerText}`);
  }
  innerFunc(a);
}
outFunc('저는 내부함수입니다.');


//3)------------------
function outFunc(){
  let outerText = 'outer-text';
  function innerFunc(a){
    let innerText = 'inner-text';
    console.log(`${outerText},${a}`);
  }
  return innerFunc;//(함수를 던져줌)내부함수를 return을 통해 외부로 노출 -> closure :이 경우 외부함수를
}

//(변수와 함수명을 똑같이 쓰면 안된다.)
let closureFunc = new outFunc();
closureFunc('저는 클로저입니다.'); //return으로 받은 내부함수
// console.log(typeof(closureFunc));

//중첩함수
/*
변수선언이름과 동일한 함수명을 사용할 수 없다. 변수로 사용 된다.
중첩함수는 외부에서 내부함수를 호출할 수 없다. 내부에서만 호출할 수 있다.
*/

//클로저(폐쇄)
/*
1.함수를 중첩으로 사용하여 외부와 단절 시킴
2.return을 사용하여 외부에 함수를 노출, 외부에서 매개변수 등을 통하여 내부함수에 접근할 수 있다.
*/

//**(시험,면접 시 클로저 질문 (함수,스콥,리턴 등 모든 개념이 이해되어있는지 확인))
//함수를 리턴하고, 리턴하는 함수가 클로저를 형성하기 때문이다. (mdn참조)
