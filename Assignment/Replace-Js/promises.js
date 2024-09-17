const promise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
        resolve("Operation completed successfully!");
    }, 2000);
});

promise.then((result) => {
    console.log(result); // Output: "Operation completed successfully!"
}).catch((error) => {
    console.error(error);
});