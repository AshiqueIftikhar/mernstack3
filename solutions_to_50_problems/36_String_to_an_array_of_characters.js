// Coding challenge #36. 
// Create a function that converts a string to an array of characters
console.log(getChars("I like JavaScript"));

function getChars(s) {
    return Array.from(s);
}

// //===Output:===📌

// [
//     'I', ' ', 'l', 'i', 'k',
//     'e', ' ', 'J', 'a', 'v',
//     'a', 'S', 'c', 'r', 'i',
//     'p', 't'
//   ]
