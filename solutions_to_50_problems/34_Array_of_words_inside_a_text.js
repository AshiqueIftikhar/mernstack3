// Coding challenge #34. 
// Create a function that will return an array with words inside a text

var text = "Create a function, that will return an array (of string), with the words inside the text";

console.log(getWords(text));

function getWords(text) {
    let startWord = -1;
    let ar = [];

    for (let i = 0; i <= text.length; i++) {
        let c = i < text.length ? text[i] : " ";

        if (!isSeparator(c) && startWord < 0) {
            startWord = i;
        }

        if (isSeparator(c) && startWord >= 0) {
            let word = text.substring(startWord, i);
            ar.push(word);

            startWord = -1;
        }
    }

    return ar;
}

function isSeparator(c) {
    var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
    return separators.includes(c);
}

// //===Output:===📌

// [
//     'Create',   'a',
//     'function', 'that',
//     'will',     'return',
//     'an',       'array',
//     'of',       'string',
//     'with',     'the',
//     'words',    'inside',
//     'the',      'text'
// ]