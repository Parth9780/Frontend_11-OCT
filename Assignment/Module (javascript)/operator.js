// What is === operator? 

console.log("In JavaScript, the === operator is called the strict equality operator or identical operator. It's used to compare two values and returns true if they are identical, meaning they have the same value and the same data type.")

// Value and type are the same
console.log(5 === 5); // true
console.log('hello' === 'hello'); // true

let x;
// Value is the same, but type is different
console.log(5 === '5'); // false
console.log('' === x); // false

// Value and type are different
console.log(5 === 10); // false
console.log('hello' === 'goodbye'); // false