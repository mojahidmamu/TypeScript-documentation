"use strict";
// Q1: Review: Async/Await কী?
Object.defineProperty(exports, "__esModule", { value: true });
// JavaScript-এ API Call, Database Query, File Read ইত্যাদি সময় নেয়।
// এই ধরনের কাজকে Asynchronous Operation বলে।
// Example: 
async function getMessage() {
    return "Hello TypeScript";
}
getMessage().then((message) => {
    console.log(message);
});
// Number Example: 
async function getNumber() {
    return 42;
}
getNumber().then((number) => {
    console.log(number);
});
// Q2: Review: Async/Await কীভাবে কাজ করে?
// Async/Await হল JavaScript-এর একটি feature যা asynchronous code কে synchronous code-এর মতো লিখতে সাহায্য করে।
// boolean Example:
async function isEven(num) {
    return num % 2 === 0;
}
isEven(4).then((result) => {
    console.log(result);
});
// Object Example:
async function getUser() {
    return { name: "John Doe", age: 30 };
}
getUser().then((user) => {
    console.log(user);
});
// Array Example:
async function getNumbers() {
    return [1, 2, 3, 4, 5];
}
getNumbers().then((number) => {
    console.log(number);
});
// // Q3: Review: Async/Await এর সুবিধা কী?
// Async/Await ব্যবহার করার সুবিধা হল এটি asynchronous code কে synchronous code-এর মতো readable এবং maintainable করে তোলে।
// Q4: Review: Async/Await এর ব্যবহার কোথায় করা হয়?
// Async/Await সাধারণত API calls, database queries, file operations ইত্যাদিতে ব্যবহার করা হয় যেখানে asynchronous operations প্রয়োজন হয়।
// Q5: Review: Async/Await এর সাথে Error Handling কিভাবে করা হয়?
// Async/Await এর সাথে Error Handling করার জন্য try...catch block ব্যবহার করা হয়।
// -----------------------------------------------------------
//# sourceMappingURL=index.js.map