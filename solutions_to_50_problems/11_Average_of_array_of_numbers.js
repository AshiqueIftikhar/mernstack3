// Coding challenge #11: 
// Calculate the average of the numbers in an array of numbers

function averageNumbers(myArray)
{
    var tempTotal = 0;
    var itemCount = myArray.length;
    for(var i=0; i<myArray.length; i++)
    {
        tempTotal = tempTotal + myArray[i];
    }
    return average = tempTotal/itemCount;
}

var myArray = [1, 3, 9, 15, 90];
console.log(averageNumbers(myArray));

//===Output:===📌
//23.6