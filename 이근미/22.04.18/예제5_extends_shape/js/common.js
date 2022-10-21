'use strict'
class Shape {
  static circleRate = 3.14;
  constructor(width,height,color){
    this.width = width;
    this.height = height;
    this.color = color;
  }
  inputDraw(a,b){//매개변수 추가: 값을 받아와서 그리기
    console.log(`${a};${b}`);
  }
  draw(){
    console.log('도형그리기');
  }
  getArea(){
    console.log(`${this.width*this.height}`);
  }
}

class Rectangle extends Shape{}

class Triangle extends Shape{
  draw(){
    console.log('삼각형그리기');
    super.draw(); //부모영역의 클래스를 가지고 온다. ->> 오버라이딩! : 오버라이딩 시 해당 함수내에 부모함수 불러온다.
  }
  getArea(){
    console.log('삼각형의 넓이:'+(this.width*this.height)/2);
  }
}

let triClass = new Triangle(10,20,'blue');
triClass.getArea();

// let shapeBox = new Shape(10,10,'red');
// shapeBox.inputDraw(25,10);
// shapeBox.draw();
// shapeBox.getArea();


//원형도형의 class 생성
class Circle extends Shape{
  constructor(radius,color){
    super();//생성자 재정의 시 부모의 field를 사용하지 않더라도 먼저 호출 후 아래 재정의하여 사용
    this.radius = radius;
    this.color = color;
  }
  draw(){
    console.log('원형그리기');
  }
  getArea(){
    console.log(`파이상수:${Shape.circleRate}`);
    console.log(Shape.circleRate * this.radius * this.radius);
  }
  rotate(){
    console.log('원형도형 회전하기');
  }
}
// let circle = new Circle(10,'yellow');
// console.log(circle.radius);
// circle.getArea();


let rect = new Rectangle(5,8,'red');
let tria = new Triangle(5,8,'blue');
let circle = new Circle(50,'yellow');

rect.getArea();
console.log(rect.color);
rect.inputDraw(10,'도형그리기');
rect.draw();

tria.getArea();
console.log(tria.color);
tria.draw();
circle.getArea();
console.log(circle.color);
circle.draw();
circle.rotate();
