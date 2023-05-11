// Coding challenge #31a. 
// Create a function that will return the number of words in a text
// Solution 1
function countWords(text) {
    var wasSeparator = true;
    var words = 0;

    for (var c of text) {
        // if current character is separator then advance and
        // set that the previous character was separator
        if (isSeparator(c)) {
            wasSeparator = true;
            continue;
        }

        // if current character is not separator
        // ... but if previous was separator...
        if (wasSeparator) {
            words++;
            wasSeparator = false;
        }
    }

    return words;
}

function isSeparator(c) {
    var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(c);
}

console.log(countWords(""));
console.log(countWords("            "));
console.log(countWords("JavaScript!!!   "));
console.log(countWords("     JavaScript"));
console.log(countWords("    JavaScript is cool      "));
console.log(countWords("I like to learn JavaScript with Lead Educare"));

// Solution 2

// function countWords(text) {
//     var words = 0;

//     if (text.length > 0 && !isSeparator(text[0]))
//         words++;

//     for (var i = 1; i < text.length; i++) {
//         var currChr = text[i];
//         var prevChr = text[i - 1];

//         if (!isSeparator(currChr) && isSeparator(prevChr)) {
//             words++;
//         }
//     }

//     return words;
// }

// function isSeparator(c) {
//     var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
//     return separators.includes(c);
// }

// console.log(countWords(""));
// console.log(countWords("            "));
// console.log(countWords("JavaScript!!!   "));
// console.log(countWords("     JavaScript"));
// console.log(countWords("    JavaScript is cool      "));
// console.log(countWords("I like to learn JavaScript with Lead Educare"));


// //===Output:===📌

// 0
// 0
// 1
// 1
// 3
// 8