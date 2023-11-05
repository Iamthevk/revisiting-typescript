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
    }
    else {
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
    }
    else {
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
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
console.log(Size.small);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
console.log(Direction.Down);
function setProductSizes(size) { }
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
    constructor(name, price, productType) {
        this.productType = "";
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
    constructor() {
        super(...arguments);
        this.color = "orange";
        // constructor(name: string, price: number) {
        //   super(name,price)
        // //other stuff for product
        // }
    }
}
class WarrantyNew extends InventoryItemNew {
    constructor(name, price, productType, startTime, endTime) {
        super(name, price, productType);
        this.startTime = startTime;
        this.endTime = endTime;
    }
    msgBody() {
        return (`Thank you for purchasing ${this.name} ${this.productType} of INR ${this.price} on ${this.startTime} and warranty will be valid till ${this.endTime} `);
    }
    msgSubject() {
        return (`Company Name: ${this.name.toUpperCase()}`);
    }
}
const bat = new MyProduct("mrf", 1200, "");
// bat.buy()
const fan = new WarrantyNew("usha", 1500, "fan", new Date("Nov 4,2023 12:00:00"), new Date("Nov 4,2024 12:00:00"));
const chair = new WarrantyNew("neelkamal", 4500, "chair", new Date("Nov 4,2023 12:00:00"), new Date("Nov 4,2024 12:00:00"));
// fan.buy()
// console.log(fan.msgBody())
// console.log(fan.msgSubject())
function warrantyCard(warrantyInfo, to) {
    console.log('Body:', warrantyInfo.msgBody());
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
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
}
class Cat extends Animal {
    constructor(color, name, haveBigEyes, numberOfeyes) {
        super(color, name);
        this.haveBigEyes = haveBigEyes;
        this.numberOfeyes = numberOfeyes;
    }
}
class Suzy extends Cat {
    constructor(color, name, haveBigEyes, numberOfeyes) {
        super(color, name, haveBigEyes, numberOfeyes);
    }
}
const suzy = new Suzy("white", "suzy", false, 2);
const dog = new Animal("brown", "jacky");
const mona = new Cat("black", "mona", true, 2);
// mona.haveBigEyes = false //Cannot assign to 'haveBigEyes' because it is a read-only 
// console.log(dog)
console.log(mona);
