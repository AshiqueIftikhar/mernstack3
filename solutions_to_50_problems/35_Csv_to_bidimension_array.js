// Coding challenge #35. Create a function to convert a CSV text to a “bi-dimensional” array

var data = "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";

var ar = csvToArray(data);
console.log(JSON.stringify(ar));

function csvToArray(data) {
    var arLines = data.split("\n");

    for (var i = 0; i < arLines.length; i++) {
        var arLine = arLines[i].split(";");
        arLines[i] = arLine;
    }

    return arLines;
}

// //===Output:===📌

// [["John","Smith","954-000-0000"],["Mich","Tiger","305-000-0000"],["Monique","Vasquez","103-000-0000"]]