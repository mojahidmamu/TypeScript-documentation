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
async function fetchUserData(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = await response.json();
    return [userData];
}
async function displayUserData(userId) {
    const users = await fetchUserData(userId);
    console.log(users);
}
displayUserData(1);
// Q1: Fetch API Data: Fetch API Data করার জন্য আমরা fetch() function ব্যবহার করি। এটি একটি asynchronous operation যা একটি Promise return করে। আমরা await keyword ব্যবহার করে এই Promise-এর result কে wait করতে পারি।
//# sourceMappingURL=index.js.map