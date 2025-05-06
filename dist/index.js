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
console.log("Interfaces Ex: 1. ", user);
function welcome(person) {
    return "Welcome, " + person.name + ", Course: " + person.course;
}
const welcomeGreetings = welcome({ name: "Rorry", course: "BSIT" });
console.log("Interfaces Ex: 1. ", welcomeGreetings);
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
// 4. Generics
//  Example 1
function indentity(value) {
    return value;
}
const generic = indentity("Generics Ex 1");
console.log("Generic Ex: 1. ", generic);
//  Example 2
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const mergeData = merge("Hello", 2);
console.log("Generic Ex: 2. ", mergeData);
// ====================================================================
// 5. Type Inference
// xample 1
let count = 5;
console.log("Type Inference Ex: 1. ", count);
// Example 2
const title = "Welcome";
console.log("Type Inference Ex: 2. ", title);
// ===================================================================
// Union & Intersection Types
// Example 1 (Union)
let value;
value = 42;
console.log("Union & Intersection Types Ex: 1. ", value);
const person = { name: "Bob", age: 30 };
console.log("Union & Intersection Types Ex: 2. ", person);
// ===================================================================
