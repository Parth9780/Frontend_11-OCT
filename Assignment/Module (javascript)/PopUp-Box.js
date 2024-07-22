// What are all the types of Pop up boxes available in JavaScript?

// console.log('--Alert Box--');
// alert("This is an alert box!");

// console.log('-- Confirm Box--');
// const result = confirm("Do you want to proceed?");
// if (result) {
//     console.log("You clicked OK!");
// } else {
//     console.log("You clicked Cancel!");
// }

console.log('--Prompt Box--');
const userName = prompt("Please enter your name:");
if (userName != null) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log("You clicked Cancel!");
}