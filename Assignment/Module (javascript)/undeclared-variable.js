// What are undeclared and undefined variables? 

console.log('In JavaScript, variables can be either declared or undeclared, and they can also be either defined or undefined.')
console.log('---undeclared variables---')
console.log('An undeclared variable is a variable that has not been declared using the let, const, or var keywords. ')

// Example:
console.log(x); // ReferenceError: x is not defined

console.log('---Undefined Variables---')
console.log('An undefined variable is a variable that has been declared, but it doesnot have a value assigned to it. ')

// Example:
let x;
console.log(x); // undefined