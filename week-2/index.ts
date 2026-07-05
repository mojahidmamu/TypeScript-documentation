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
