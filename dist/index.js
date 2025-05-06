"use strict";
// 1. Static type-checking
//Ex: 1
const message = "Hello World!";
console.log("Static type Ex: 1. ", message);
// Ex: 2
function greet(name) {
    return `Hello, ${name}`;
}
const Greet = greet("Rorry");
console.log("Static type Ex: 2. ", Greet);
const user = { name: "Rorry Ramos", age: 34, noob: true };
console.log("Interfaces Ex: ", user);
const point = { x: 10, y: 5 };
console.log("Types Ex: ", point);
// =======================================================================
// 3. Enums
//  Example 1
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let color = Color.Green;
console.log("Enums Ex: 1. ", color);
//  Example 2
var Directions;
(function (Directions) {
    Directions["Up"] = "Up";
    Directions["Down"] = "Down";
})(Directions || (Directions = {}));
console.log("Enums Ex: 2. ", Directions.Down);
