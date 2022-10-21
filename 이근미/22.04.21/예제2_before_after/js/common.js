$(function() {
  //https://quantumcode.tistory.com/의 'HTML변경과 가져오기'표 참조

  //script영역 before(), after() 사용예

  //before() ---
  // $("p#first").before("<h2>html</h2>");
  // $("p#second").before("<h2>CSS3</h2>");
  // $("p#third").before("<h2>javascript</h2>");

  //before() after()사용하여 위 결과와 같게 만들기
  // $("p#first").before("<h2>html</h2>");
  // $("p#first").after("<h2>CSS3</h2>");
  // $("p#second").after("<h2>javascript</h2>");

  //method chaining메서드체이닝 사용하여 위 결과와 같게 만들기
  $("p#first").before("<h2>html</h2>").after("<h2>CSS3</h2>");
  $("p#second").after("<h2>javascript</h2>");

});
