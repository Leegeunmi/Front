'use strict'
//try_catch
//데이터를 가지고 왔을때 제대로 넘어왔는지, 오류가 있다면 알수있게 중간중간에 스콥트를 만들어 데이터,함수 등 중간에 체킹하여 오류를 확인할 수 있게 한다. (안전장치)

class User {
  constructor(name,age,local){
    this.name = name;
    this.age = age;
    this.local = local;
  }
  introduce(){ //try,catch,finally세트
    try{
      alert(`안녕하세요. ${this.local}에 사는 ${this.age}살 ${this.name}입니다.`);
      // throw new Error('ㅠ_ㅠ Error!'); //예외처리 : 강제로 에러 발생시킴
      boxCheck();//존재하지 않는 함수를 임의로 호출하여 오류 발생시킴
    }
    catch(e){//error를 e로 받아온다. e외 다른 것도 상관없지만 보편적으로 e 혹은 error을 많이 쓴다.
      console.error(`${e.name},${e.message}`);//여기 e.name e.message 오류의 유형이다. 에러마다 이름을 갖고있음.
    }
    finally{
      console.log('프로그램을 종료합니다.');
    }
  }
}

let user1 = new User('Jane',29,'LA');
user1.introduce();


//------------------------------------------------------------------------------------
// try{
//   정상 코드라면 아무런 문제없이 try블록의 시작부터 끝까지 실행된다.
//   하지만 경우에 따라 예외가 발생할 수 있다.
//   예외는 throw문에 의해 직접적으로 발생할 수도 있고,
//   예외를 발생시키는 메서드의 호출에 의해 발생할 수도 있다.
// }

// catch(e){ 보편적으로 e 혹은 error을 많이 쓴다.
//   이 블록 내부의 문장들은 오직 try블록에서 예외가 발생할 경우에만 실행된다.
//   이 문장들에서는 지역 변수 e를 사용하여 Error객체 또는 던진(throw) 다른값을 참조할 수 있다.
//   이 블록에서는 어떻게든 그 예외를 처리할 수도 있고, 그냥 아무것도 하지 않고 예외를 무시할 수도 있고,
//   throw를 사용해서 예외를 다시 발생시킬 수도 있다.
// }


//--try에서 throw 하면 catch해서 진행한다. 이든 아니든 결국 finally까지 진행된다.


// finally{
//   이 블록에는 try 블록에서 일어난 일에 관계없이 무조건 실행될 코드가 위치한다.
//   이 코드는 try블록이 어떻게든 종료되면 실행된다.
//
//   try블록이 종료되는 상황은 다음과 같다.
//   1) 정상적으로 블록의 끝에 도달했을때
//   2) break, continue 또는 return문에 의해서
//   3) 예외가 발생했지만 catch절에서 처리했을 때
//   4) 예외가 발생했고 그것이 잡히지 않은 채 퍼져나갈 때
// }
