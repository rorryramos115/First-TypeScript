
// 1. Static type-checking
//Ex: 1
const message: string = "Hello World!";
console.log("Static type Ex: 1. ", message);

// Ex: 2
function greet(name: string): string {
    return `Hello, ${name}`
}
const Greet: string = greet("Rorry");
console.log("Static type Ex: 2. ", Greet);

// =======================================================================

// 2. Interfaces & Types
// Example 1 (Interface) 1:
interface User {
    name: string;
    age: number;
    noob: Boolean;
}
const user: User = { name:"Rorry Ramos", age: 34, noob: true};
console.log("Interfaces Ex: 1. ", user);

// Example 1 (Interface with object) 2:
interface Person {
    name: string,
    course: string,
}
function welcome(person: Person) {
    return "Welcome, " + person.name + ", Course: " + person.course;
}
const welcomeGreetings = welcome({name: "Rorry", course: "BSIT"});
console.log("Interfaces Ex: 1. ", welcomeGreetings);

// Example 3 (Type Alias):
type Point = { x:number, y:number};
const point: Point = { x: 10, y: 5};
console.log("Types Ex: ", point);

// =======================================================================

// 3. Enums
//  Example 1
enum Color {Red, Green, Blue};
let color: Color = Color.Green;
console.log("Enums Ex: 1. ", color);

//  Example 2
enum Directions {
    Up = "Up",
    Down = "Down",
}
console.log("Enums Ex: 2. ", Directions.Down);

// ======================================================================

// 4. Generics
//  Example 1
function indentity<T>(value: T): T {
    return value;
}
const generic = indentity("Generics Ex 1");
console.log("Generic Ex: 1. ", generic);

//  Example 2
function merge <T, U>(a: T, b: U): T & U {
    return{...a, ...b}
}
const mergeData = merge("Hello", 2)
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

// 6. Union & Intersection Types
// Example 1 (Union)
let value: string | number;
value = 42;
console.log("Union & Intersection Types Ex: 1. ", value);

// Example 2 (Intersection)
type A = { name: string };
type B = { age: number };
type C = A & B;
const person: C = { name: "Bob", age: 30 };
console.log("Union & Intersection Types Ex: 2. ", person);

// ===================================================================

// 7. Tuples
//  Example 1
let tuple: [string, number] = ["Age", 30];
console.log("Tuples Ex: 1. ", tuple);

// Example 2
const user1: [string, boolean] = ["Admin", true];
console.log("Tuples Ex: 2. ", user1);

// ===================================================================

