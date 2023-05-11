// Coding challenge #23: 
// Reverse a string
var s = reverseString("JavaScript");
console.log(s);

function reverseString(s) {
    var s2 = "";

    for (var i = s.length - 1; i >= 0; i--) {
        var char = s[i];
        s2 += char;
    }

    return s2;
}

// //===Output:===📌

// tpircSavaJ