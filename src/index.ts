
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
// Example 1 (Interface):
interface User {
    name: string;
    age: number;
    noob: Boolean;
}
const user: User = { name:"Rorry Ramos", age: 34, noob: true};
console.log("Interfaces Ex: ", user);

// Example 2 (Type Alias):
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

// Generics
//  Example 1
function indentity<T>(value: T): T {
    return value;
}
console.log(indentity("Generics Ex 1"));

//  Example 2
function merge <T, U>(a: T, b: U): T & U {
    return{...a, ...b}
}
console.log(merge("Hello", 2));