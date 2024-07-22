// What is the use of isNaN function?

console.log('The isNaN function in JavaScript is used to determine whether a value is NaN (Not a Number). It returns true if the value is NaN, and false otherwise.')

const NanFunction = () => {
    var userInput = "123";
    if (!isNaN(parseFloat(userInput))) {
        console.log("The input can be converted to a number.");
    } else {
        console.log("The input cannot be converted to a number.");
    }
}
NanFunction()