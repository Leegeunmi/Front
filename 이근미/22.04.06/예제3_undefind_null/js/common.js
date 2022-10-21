'use strict'

// undefined test
// 출력테스트
var variable;
console.log(typeof(variable)); //undefined라는 자료형 (데이터가 없다. / 메모리가 존재하지않는다.)
                              //변수값을 선언만 하고 초기화 하지 않은 상태

// null test
var nullTest = null;
console.log(typeof(nullTest)); //null 자료형 (object타입) (객체이므로 데이터가 있다 / 메모리가 존재한다.)
                              //할당된 값이 없다는 것을 표현할 때 사용
                              //값은 있지만 비어있다고 알려줌
                              //비어있다는 걸 강제로 알려주는 것
