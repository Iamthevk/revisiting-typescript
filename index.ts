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

// class MYProduct {
//   name: string;
//   price: number;
//   color: string = "orange";
//   size?: Size;

//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
//   buy() {
//     // console.log(this.price)
//     return this;
//   }
// }
// const milk = new MYProduct("amul", 36);
// milk.color = "white";
// milk.size = Size.medium;
// console.log(milk.buy());

class InventoryItemNew{
  name: string;
  price: number;
  productType?: string = "";

  constructor(name: string,price: number,productType: string){
    this.name = name;
    this.price = price;
    this.productType = productType;
  }
  buy() {
    console.log(this.price)
    return this;
  }
}

// Extending Classes 
class MyProduct extends InventoryItemNew {
    color: string = "orange";
  size?: Size;

  // constructor(name: string, price: number) {
  //   super(name,price)
  // //other stuff for product
  // }
  
}

// class WarrantyNew extends InventoryItemNew{
//   startTime: Date;
//   endTime: Date;

//   constructor(name: string, price: number,startTime: Date, endTime : Date){
//     super(name,price)
//     this.startTime = startTime
//     this.endTime = endTime
    
//   }
// }

//Implementing Interfaces on Classes in TypeScript

interface WarrantyInfo{
  msgBody(): string
  msgSubject(): string
}
class WarrantyNew extends InventoryItemNew implements WarrantyInfo{
  startTime: Date;
  endTime: Date;

  constructor(name: string, price: number,productType:string,startTime: Date, endTime : Date){
    super(name,price,productType)
    this.startTime = startTime
    this.endTime = endTime
    
  }
  msgBody() {
      return (`Thank you for purchasing ${this.name} ${this.productType} of INR ${this.price} on ${this.startTime} and warranty will be valid till ${this.endTime} `)
  }
  msgSubject() {
       return (`Company Name: ${this.name.toUpperCase()}` )
  }

}

const bat = new MyProduct("mrf", 1200,"")
// bat.buy()

const fan = new WarrantyNew("usha",1500,"fan",new Date("Nov 4,2023 12:00:00"),new Date("Nov 4,2024 12:00:00"))
const chair = new WarrantyNew("neelkamal", 4500, "chair", new Date("Nov 4,2023 12:00:00"),new Date("Nov 4,2024 12:00:00"))
// fan.buy()

// console.log(fan.msgBody())
// console.log(fan.msgSubject())

function warrantyCard(warrantyInfo: WarrantyInfo, to: string) {
  console.log('Body:',  warrantyInfo.msgBody())
  console.log("Subject:", warrantyInfo.msgSubject())
  console.log("To", to)
}
warrantyCard(fan,"vijay.vuex@gmail.com")
warrantyCard(chair,"vijay.vuex@gmail.com")