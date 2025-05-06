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
function welcome(person) {
    return "Welcome, " + person.name + ", Course: " + person.course;
}
const welcomeGreetings = welcome({ name: "Rorry", course: "BSIT" });
console.log(welcomeGreetings);
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
// ======================================================================
// Generics
//  Example 1
function indentity(value) {
    return value;
}
console.log(indentity("Generics Ex 1"));
//  Example 2
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
console.log(merge("Hello", 2));
