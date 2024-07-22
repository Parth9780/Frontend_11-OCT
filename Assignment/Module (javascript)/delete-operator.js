// What is the function of the delete operator? 

// The delete operator in JavaScript is used to remove a property from an object or an element from an array. 

const person = { name: 'Parth', age: 19 };
delete person.age;
console.log(person); // { name: 'Parth' }