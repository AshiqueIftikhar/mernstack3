// Coding challenge #24: 
// Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

var ar = mergeArrays(ar1, ar2);
console.log(ar);

function mergeArrays(ar1, ar2) {
    var ar = [];

    for (let el of ar1) {
        ar.push(el);
    }

    for (let el of ar2) {
        ar.push(el);
    }

    return ar;
}

// //===Output:===📌

// [ 1, 2, 3, 4, 5, 6 ]