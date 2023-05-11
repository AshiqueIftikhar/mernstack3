// Coding challenge #20: 
// Rotate an array to the left 1 position

var ar = [1, 2, 3];
rotateLeft(ar);
console.log(ar);

function rotateLeft(ar) {
    var first = ar.shift();
    ar.push(first);
}

// //===Output:===📌

[ 2, 3, 1 ]