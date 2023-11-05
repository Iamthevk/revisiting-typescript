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

class InventoryItemNew {
  name: string;
  price: number;
  productType?: string = "";

  constructor(name: string, price: number, productType: string) {
    this.name = name;
    this.price = price;
    this.productType = productType;
  }
  buy() {
    console.log(this.price);
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

interface WarrantyInfo {
  msgBody(): string;
  msgSubject(): string;
}
class WarrantyNew extends InventoryItemNew implements WarrantyInfo {
  startTime: Date;
  endTime: Date;

  constructor(
    name: string,
    price: number,
    productType: string,
    startTime: Date,
    endTime: Date
  ) {
    super(name, price, productType);
    this.startTime = startTime;
    this.endTime = endTime;
  }
  msgBody() {
    return `Thank you for purchasing ${this.name} ${this.productType} of INR ${this.price} on ${this.startTime} and warranty will be valid till ${this.endTime} `;
  }
  msgSubject() {
    return `Company Name: ${this.name.toUpperCase()}`;
  }
}

const bat = new MyProduct("mrf", 1200, "");
// bat.buy()

const fan = new WarrantyNew(
  "usha",
  1500,
  "fan",
  new Date("Nov 4,2023 12:00:00"),
  new Date("Nov 4,2024 12:00:00")
);
const chair = new WarrantyNew(
  "neelkamal",
  4500,
  "chair",
  new Date("Nov 4,2023 12:00:00"),
  new Date("Nov 4,2024 12:00:00")
);
// fan.buy()

// console.log(fan.msgBody())
// console.log(fan.msgSubject())

function warrantyCard(warrantyInfo: WarrantyInfo, to: string) {
  console.log("Body:", warrantyInfo.msgBody());
  console.log("Subject:", warrantyInfo.msgSubject());
  console.log("To", to);
}
// warrantyCard(fan,"vijay.vuex@gmail.com")
// warrantyCard(chair,"vijay.vuex@gmail.com")

// interface AnimalType{
//   color: string;
//   name: string;
// }

class Animal {
  color: string;
  name: string;
  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }
}

class Cat extends Animal {
  //  private haveBigEyes: boolean // Property 'haveBigEyes' is private and only accessible within class
  // protected haveBigEyes: boolean    //Property 'haveBigEyes' is protected and only accessible within class 'Cat' and its subclasses
  readonly haveBigEyes: boolean;
  numberOfeyes: number;

  constructor(
    color: string,
    name: string,
    haveBigEyes: boolean,
    numberOfeyes: number
  ) {
    super(color, name);
    this.haveBigEyes = haveBigEyes;
    this.numberOfeyes = numberOfeyes;
  }
}

class Suzy extends Cat {
  constructor(
    color: string,
    name: string,
    haveBigEyes: boolean,
    numberOfeyes: number
  ) {
    super(color, name, haveBigEyes, numberOfeyes);
  }
}
const suzy = new Suzy("white", "suzy", false, 2);

const dog = new Animal("brown", "jacky");

const mona = new Cat("black", "mona", true, 2);
// mona.haveBigEyes = false //Cannot assign to 'haveBigEyes' because it is a read-only
// console.log(dog)
// console.log(mona)

// Type Assertion

// const theCanvas = document.getElementById("the-canvas") as HTMLCanvasElement;
// without assigning HTMLCanvasElement, we are getting HTMLElement when we hover
// its a way to give typescript more information manually

// function getNetPrice(price: number, discount: number, format: boolean): number | string{
//   let netPrice = price * (1 - discount);
//   return format ? `${netPrice}` : netPrice

// }
// const netPrice = getNetPrice(30,5,true) as string ; //netPrice: string | number
// 👆 we already know that it will return string so we can give more information to typescript by assigning  as string in last;

//we can also write netPrice like this
// const netPrice = <string>getNetPrice(30,5,true);

//type assertions are removed at compile-time and there is no runtime  checking associated with a type assertion

// type Unknown
function getNetPrice(
  price: number,
  discount: number,
  format: boolean
): unknown {
  let netPrice = price * (1 - discount);
  return format ? `${netPrice}` : netPrice;
}
const netPrice = getNetPrice(30, 5, true) as string;
//'netPrice' is of type 'unknown' until we assign type of netPrice as string type assertion
// netPrice.indexOf("2")

/* ***** Generics ***** */

const books = ["Harry potter", "shazam", "spider man"];
const obj = { id: 2, name: "SKY" };

const clone = <T>(value: T): T => {
  const json = JSON.stringify(value);
  return JSON.parse(json);
  return value;
};

// console.log(clone(obj));
// console.log(clone(obj) === obj); // false becoz of deep clone

const getName = clone(obj);
// console.log( getName.name)

const getBooks = clone(books); //clone<string[]>(books) we can also write like this
// console.log(getBooks.length) // becoz of using generics TS know that books are type of string[]

/* *****    Advanced Narrowing    **** */
//Type Guards is used for narrowing in TS like we do conditionally in JS
const reverse = (value: string | string[]) => {
  if (typeof value === "string") {
    return value.split("").reverse().join("");
  } else {
    return [...value].reverse();
  }
};
// console.log(reverse("123")) // "321"
// console.log(reverse(["a","b","c"])) // ["c","b","a"]

// class Person{
//   firstName: string;
//   lastName: string;
//   constructor(firstName:string,lastName:string){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
// class Company{
//   name : string
//   constructor(name : string){
//     this.name = name
//   }
// }
// const person1 = new Person("Vijay","Kumar")
// const company = new Company("UniFrontier Technologies")

// function greeting(entity : Person | Company){
//   if(entity instanceof Person){

//     console.log(`Hello Mr ${entity.firstName} ${entity.lastName}`)
//   }else{

//     console.log(`Hello M/S ${entity.name}`)
//   }
// }

// greeting(person1)
// greeting(company)

// if except of class we have interfaces
interface Person {
  firstName: string;
  lastName: string;
}
interface Company {
  name: string;
}

function greeting(entity: Person | Company) {
  if ("lastName" in entity) {
    console.log(`Hello Mr ${entity.firstName} ${entity.lastName}`);
  } else {
    console.log(`Hello M/S ${entity.name}`);
  }
}
const person2: Person = { firstName: "prem", lastName: "chand" };
greeting(person2);
greeting({ name: "xyz technologies" });
