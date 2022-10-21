'use strict'
function Product(name, price){
  this.name = name;
  this.price = price;
  this.getProcuct = function(){
    console.log('get product');
  }
}

function Food(name, price){
  Product.call(this, name, price);
  this.category = 'food';
}

let pd = new Product('apple',2000);
console.log(pd.name);
console.log(pd.price);
console.log(pd.category);
pd.getProcuct();

let choco = new Food('choco',5000);
console.log(choco.category);

//-------------------------------------------------------------------------------

function Bakery(name, price){
  Product.call(this, name, price);
  this.category = 'bakery';
  this.pdCheck = function(){
    return `${bakery.category}에서 구매하신 상품은 ${bakery.name}이고, 상품의 금액은 ${bakery.price}입니다.`
    // alert(`${bread.category}에서 구매하신 상품은 ${bread.name}이고, 상품의 금액은 ${bread.price}입니다.`);
  }
}
let bakery = new Bakery('cheese-bread',7000);
// bakery.pdCheck();
alert(bakery.pdCheck());
console.log(bakery.pdCheck());
