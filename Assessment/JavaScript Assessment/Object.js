function countOccurrences(arr) {
    const obj = {};
    for (const num of arr) {
        if (obj[num]) {
            obj[num]++;
        } else {
            obj[num] = 1;
        }
    }
    return obj;
}

// const arr = [1, 2, 2, 3];
// const arr = [9, 9, 9, 99];
const arr = [4, 3, 2, 1];
console.log(arr);
const result = countOccurrences(arr);
console.log(result); // Output: { 1: 2, 2: 2, 3: 3, 4: 1 }