'use strict'
function outFunc(x){
  const y = 5;
  function innerFunc(z){
    return x + y + z;
  }
  return innerFunc;
}

//makeAdder10, makeAdder20는 클로저
let makeAdder10 = new outFunc(10); //생성자로 인스턴스 생성
let makeAdder20 = new outFunc(20);
console.log(makeAdder10(2)); // x:10 y:5 z:2 -> 17
console.log(makeAdder20(5)); //x:20 y:5 z:5 -> 30


let closureFunc = new outFunc(10);
console.log(typeof(closureFunc)); //내부함수를 리턴하지 않을 때 데이터타입 - 객체
console.log(typeof(closureFunc)); //내부함수를 리턴할 때 데이터타입 - 함수

/*
1.함수를 중첩으로 사용하여 외부와 단절시킴
2. return을 사용하여 외부에 함수를 노출, 외부에서 매개변등을 통하여 내부함수에 접근할 수 있다.
3. 생성자를 통해서 만들 경우 함수를 만들어내는 공장과 같다.
4. 추후 class와 유사하다 : 객체의 형태를 제공 -> 내부함수가 그 역할을 한다.
*/
