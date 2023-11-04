"use strict";
const anExampleVariable = "Hello World";
// console.log(anExampleVariable)
// explicit types for primitives
let price = 30;
let schoolName = "SMH school";
let isFoodReady = true;
const superHeroes = ["batman", "superman", "moonknight"];
superHeroes.push("Aryamaan");
// console.log(superHeroes)
function sum(x, y) {
  return x + y;
}
// console.log(sum(5,3))
//when function dont return anything then we should use void
function log(value) {
  console.log(value);
}
function greet(name) {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log("Hello stranger");
  }
}
// greet()
console.clear();
// union types
let boolOrString = "I am string";
boolOrString = true;
//param destructuring
function addNums({ a, b }) {
  return a * b;
}
// console.log(addNums({a:19,b:3}))
function printId(id) {
  if (typeof id === "number") {
    //  console.log(typeof id)
    return id * 4;
  } else {
    return id;
  }
}
function setProductSize(product) {
  //...
}
const shirt = {
  name: "levis",
  price: 2500,
  color: "blue",
};
const eveready = {
  item: "led bulb",
  color: "light yellow",
  price: 220,
};
const bulbWarranty = {
  item: "syska led",
  color: "Milky white",
  startTime: new Date("Nov 4,2023 12:00:00"),
  endTime: new Date("Nov 3 2024 11:59:59"),
};
// console.log(bulbWarranty)
function purchaseItem(item) {
  console.log(item.color);
  return item;
}
// purchaseItem({color: "golden yellow",item: "surya led"})
// console.log(purchaseItem(eveready))
//Enums
var Size;
(function (Size) {
  Size[(Size["small"] = 0)] = "small";
  Size[(Size["medium"] = 1)] = "medium";
  Size[(Size["large"] = 2)] = "large";
})(Size || (Size = {}));
console.log(Size.small);
var Direction;
(function (Direction) {
  Direction[(Direction["Up"] = 0)] = "Up";
  Direction[(Direction["Down"] = 1)] = "Down";
  Direction[(Direction["Left"] = 2)] = "Left";
  Direction[(Direction["Right"] = 3)] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
console.log(Direction.Down);
function setProductSizes(size) {}
setProductSizes(Size.small);
// console.log(typeof Sizes)
console.clear();
class MYProduct {
  constructor(name, price) {
    this.color = "orange";
    this.name = name;
    this.price = price;
  }
  buy() {
    // console.log(this.price)
    return this;
  }
}
const milk = new MYProduct("amul", 36);
milk.color = "white";
milk.size = Size.medium;
console.log(milk.buy());
