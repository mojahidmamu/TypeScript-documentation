"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Primitive Data Types
// 1. String: 
let UserName = "Abdullah all Mojahid";
console.log(UserName);
// 2. Number: 
let age = 21;
console.log(age);
// 3. Boolean:
let isStudent = true;
console.log(isStudent);
// 4. Null:
let nullValue = null;
console.log(nullValue);
// 5. Undefined:
let undefinedValue = undefined;
console.log(undefinedValue);
// 6. Symbol:
let uniqueId = Symbol("id");
console.log(uniqueId);
// 7. BigInt:
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);
// Non-Primitive Data Types: 
// 1. Array: 
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[2]); // Accessing the third element of the array
// 2. Tuple:
let user = ["Abdullah", 21];
console.log(user);
// 3. Enum:
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Blue; // give the index number of this color 
console.log(favoriteColor);
// 4. Any:
let anyValue = "Hello, World!";
console.log(anyValue);
// 5. Void:
function logMessage(message) {
    console.log(message);
}
logMessage("This is a log message.");
// 6. Object:
let person = { name: "Abdullah", age: 21 };
console.log(person);
console.log("Name:", person.name); // Accessing the name property of the object
console.log("Age:", person.age); // Accessing the age property of the object
//# sourceMappingURL=index.js.map