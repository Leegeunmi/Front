'use strict'
class Shape {
  constructor(width,height,color){
    this.width = width;
    this.height = height
    this.color = color;
  }
  inputDraw(a,b){
    console.log(`${a};${b}`);
  }
  draw(){
    console.log('도형그리기');
  }
  getArea(){
    console.log(`${this.width*this.height}`);
  }
}
