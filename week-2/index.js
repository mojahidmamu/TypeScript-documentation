"use strict";
// Q1: What is an Interface?
// Interface হলো একটি blueprint (নকশা)।
// এটি বলে দেয় একটি object-এর structure কেমন হবে।
// Interface হলো একটি contract (চুক্তি)। এটি বলে দেয় কোন কোন properties এবং methods একটি object-এ থাকতে হবে।
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    name: "Mojahid",
    age: 20,
    isStudent: true,
};
const student2 = {
    name: "Rahim",
    age: 22,
    isStudent: false,
};
console.log(student1);
// 2. Type Alias:
// 3. Union Type:
let id;
id = 101;
id = "A101";
// ...
function printId(id) {
    console.log(id);
}
printId(101);
printId("ABC");
//# sourceMappingURL=index.js.map