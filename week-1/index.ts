// Primitive Data Types
// 1. String: 
let UserName: string = "Abdullah all Mojahid";
console.log(UserName);

// 2. Number: 
let age: number = 21;
console.log(age);

// 3. Boolean:
let isStudent: boolean = true;
console.log(isStudent);

// 4. Null:
let nullValue: null = null;
console.log(nullValue);

// 5. Undefined:
let undefinedValue: undefined = undefined;
console.log(undefinedValue);

// 6. Symbol:
let uniqueId: symbol = Symbol("id");
console.log(uniqueId);

// 7. BigInt:
let bigNumber: bigint = 1234567890123456789012345678901234567890n;
console.log(bigNumber);

// Non-Primitive Data Types: 
// 1. Array: 
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[2]); // Accessing the third element of the array


// 2. Tuple:
let user: [string, number] = ["Abdullah", 21];
console.log(user);

// 3. Enum:
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Blue; // give the index number of this color 
console.log(favoriteColor);

// 4. Any:
let anyValue: any = "Hello, World!";
console.log(anyValue);

// 5. Void:
function logMessage(message: string): void {
    console.log(message);
}
logMessage("This is a log message.");

// 6. Object:
let person: {name: string, age: number} = {name: "Abdullah", age: 21};
console.log(person);
console.log("Name:", person.name); // Accessing the name property of the object
console.log("Age:", person.age); // Accessing the age property of the object

