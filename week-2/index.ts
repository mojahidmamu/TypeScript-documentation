// Q1: What is an Interface?
// Interface হলো একটি blueprint (নকশা)।
// এটি বলে দেয় একটি object-এর structure কেমন হবে।
// Interface হলো একটি contract (চুক্তি)। এটি বলে দেয় কোন কোন properties এবং methods একটি object-এ থাকতে হবে।

interface Student {
  name: string;
  age: number;
  isStudent: boolean;
}

const student1: Student = {
  name: "Mojahid",
  age: 20,
  isStudent: true,
};

const student2: Student = {
  name: "Rahim",
  age: 22,
  isStudent: false,
};
console.log(student1);

// 2. Type Alias:
// 3. Union Type:
let id: string | number;
id = 101;
id = "A101";

// ...
function printId(id: string | number) {
  console.log(id);
}
printId(101);
printId("ABC");

// Anonymous Function:
const names = ["Mojahid", "Rahim", "Karim"];
names.forEach(function (name) {
  console.log(name.toUpperCase());
});

names.forEach((name) => {
  console.log(name.toUpperCase());
});

// Narrowing:
function printId2(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
printId2(111);
printId2("MOJO");

// Generic Function:
function firstElement<X>(arr: X[]): X | undefined {
  return arr[0];
}
const s = firstElement(["a", "b", "c"]); // s is of type 'string'
const n = firstElement([1, 2, 3]);       // n is of type 'number'
const u = firstElement([]);              // u is of type undefined


// Parameter Destructuring:
function printName({ first, last }: { first: string; last: string }) {
  console.log(`${first} ${last}`);
}
printName({ first: "John", last: "Doe" });

// class: 
class Point {
  x = 0;
  y = 0;
}
 
const pt = new Point();
// Prints 0, 0
console.log(`${pt.x}, ${pt.y}`);



// Modules:
