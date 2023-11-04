const anExampleVariable: string = "Hello World";
// console.log(anExampleVariable)

// explicit types for primitives
let price: number = 30;

let schoolName: string = "SMH school";

let isFoodReady: boolean = true;

const superHeroes: string[] = ["batman", "superman", "moonknight"];

superHeroes.push("Aryamaan");
// console.log(superHeroes)

function sum(x: number, y: number): number {
  return x + y;
}
// console.log(sum(5,3))

//when function dont return anything then we should use void
function log(value: any): void {
  console.log(value);
}

function greet(name?: string) {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log("Hello stranger");
  }
}

// greet()
console.clear();

// union types
let boolOrString: string | boolean = "I am string";
boolOrString = true;

//param destructuring

function addNums({ a, b }: { a: number; b: number }) {
  return a * b;
}
// console.log(addNums({a:19,b:3}))

function printId(id: number | string) {
  if (typeof id === "number") {
    //  console.log(typeof id)
    return id * 4;
  } else {
    return id;
  }
}
// console.log(printId('10'))

// literal types
// let pi: 3.14 = 3.14
// pi = 4.4
// we can also avoid it with using const
// const pi = 3.14

// function setProductSize(product : "small" | "medium" | "large"){
//     //...

// }
// setProductSize("huge") //error
// ☝🏻 need to provide any of the specified types

// type aliases
type Sizes = "small" | "medium" | "large"; // we can also reuse it
function setProductSize(product: Sizes) {
  //...
}

//for object literals : however Interfaces are preffered for object literals
// type Product ={
//     name: string,
//     price: number
// }
// const shirt : Product = {
//     name: "levis",
//     price: 2500
// }

//Interfaces

interface Product {
  name: string;
  price: number;
  // buy? : () => {}
}
//we can declare interface again but with type alias we get Duplicate identifier error

//this duplicating interface is very useful when we are using 3rd party libraries in our projects
interface Product {
  color: string;
}

const shirt: Product = {
  name: "levis",
  price: 2500,
  color: "blue",
};

// extending interfaces
interface InverntoryItem {
  item: string;
  color: string;
}
interface Item extends InverntoryItem {
  price: number;
}
interface Warranty extends InverntoryItem {
  startTime: Date;
  endTime: Date;
}

const eveready: Item = {
  item: "led bulb",
  color: "light yellow",
  price: 220,
};
const bulbWarranty: Warranty = {
  item: "syska led",
  color: "Milky white",
  startTime: new Date("Nov 4,2023 12:00:00"),
  endTime: new Date("Nov 3 2024 11:59:59"),
};
// console.log(bulbWarranty)

function purchaseItem(item: InverntoryItem): InverntoryItem {
  console.log(item.color);
  return item;
}
// purchaseItem({color: "golden yellow",item: "surya led"})
// console.log(purchaseItem(eveready))

//Enums
enum Size {
  small,
  medium,
  large,
}
console.log(Size.small);
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction);
console.log(Direction.Down);

function setProductSizes(size: Size) {}
setProductSizes(Size.small);
// console.log(typeof Sizes)

console.clear();

class MYProduct {
  name: string;
  price: number;
  color: string = "orange";
  size?: Size;

  constructor(name: string, price: number) {
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
