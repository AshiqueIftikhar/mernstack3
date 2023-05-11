// Coding challenge 43. 
// Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
var ar = [["John", 120],
["Jane", 115],
["Thomas", 123],
["Mel", 112],
["Charley", 122]
];

var numbers = extractCol(ar, 1);
console.log(numbers);

function extractCol(ar, colNo) {
    var arCol = [];

    for (var i = 0; i < ar.length; i++) {
        arCol.push(ar[i][colNo]);
    }

    return arCol;
}

// //===Output:===📌
// [ 120, 115, 123, 112, 122 ]