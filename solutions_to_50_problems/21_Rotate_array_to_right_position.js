// Coding challenge #21: 
// Rotate an array to the right 1 position
var ar = [1, 2, 3];
rotateRight(ar);
console.log(ar);

function rotateRight(ar) {
    var last = ar.pop();
    ar.unshift(last);
}


// //===Output:===📌
// [ 3, 1, 2 ]