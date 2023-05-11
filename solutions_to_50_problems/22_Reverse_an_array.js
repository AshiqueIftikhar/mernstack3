// Coding challenge #22: 
// Reverse an array
var ar = [1, 2, 3];
var ar2 = reverseArray(ar);
console.log(ar2);

function reverseArray(ar) {
    var ar2 = [];

    for (var i = ar.length - 1; i >= 0; i--) {
        ar2.push(ar[i]);
    }

    return ar2;
}

// //===Output:===📌

// [ 3, 2, 1 ]