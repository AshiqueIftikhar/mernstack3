// Coding challenge #37. 
// Create a function that will convert a string in an array containing the ASCII codes of each character
console.log(getCharCodes("I like JavaScript"));

function getCharCodes(s) {
    var ar = [];

    for (var i = 0; i < s.length; i++) {
        var code = s.charCodeAt(i);
        ar.push(code);
    }

    return ar;
}

// //===Output:===📌

// [
//     73,  32, 108, 105, 107, 101,
//     32,  74,  97, 118,  97,  83,
//     99, 114, 105, 112, 116
// ]