'use strict' //정확한 규칙을 기반으로 엄격히 관리하겠다. (일종의 보안장치) 잘못된 것을 알려줌
            //실무에서 중간에 투입되었을 때 애초에 use strict 되어 있으면  연달아 사용하고, 아니라면 쓰지 않는다.

//Hoisting 하위에서 선언을 해도 인식을 함 (let 안됨)

// console.log(foo());
// console.log(bar);
//
// function foo() {
//   console.log('this is function');  //선언을 나중에 했지만 위에도 찾아보고 출력해준다.
// }
// var bar = 10; //var는 안됨


// console.log(foo); //undefined (만들었지만 찾을 수 없어)
//
// var foo;
// console.log(foo); //undefined
//
// foo = 1;
// console.log(foo); // 1

// let foo = 30;
// console.log(foo); //undefined

// console.log(foo);
// foo = 1;
// let foo; // 오류 (순서를 맞춰야 한다. 아래처럼)
// let foo = 1;
// console.log(foo);


//var Hoisting 가능 (let,const는 불가)
foo = 1;
console.log(foo);
var foo;
