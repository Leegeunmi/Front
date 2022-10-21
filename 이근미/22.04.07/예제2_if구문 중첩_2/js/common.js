'use strict'

  let num = prompt('값을 입력해주세요.','숫자');
  num = Number(num);

  const numCheck1 = 5; //범위 조건 변수
  const numCheck2 = 3; //배수 조건 변수

  if (num < numCheck1) {
    alert(`숫자 ${num}은 ${numCheck1}보다 작습니다.`)
    if (num % numCheck2 == 0) {
      alert(`숫자 ${num}은 ${numCheck2}의 배수입니다.`)
    }
    else if (num != numCheck2) {
      alert(`입력한 값은 ${numCheck2}과 같지 않습니다.`)
    }
  }

// == 같다 === 자료형까지 같다  != 같지않다 !== 자료형까지 같지않다
