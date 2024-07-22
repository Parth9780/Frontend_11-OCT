// What are all the looping structures in JavaScript? 

// JavaScript has several looping structures that allow you to execute a block of code repeatedly for a specified number of iterations. 

console.log('---For Loop---');
for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log('---While Loop---');
for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log('---do..while loop---');
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);