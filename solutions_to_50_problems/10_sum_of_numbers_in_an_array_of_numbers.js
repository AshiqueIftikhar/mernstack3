// Coding challenge #10: 
// Calculate the sum of numbers in an array of numbers

function AddArrayNumbers(arr)
{
    
    var total = 0;
    for(var i=0; i< arr.length; i++)
    {
        total += arr[i];
    }
    return total;
}

var arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sum = AddArrayNumbers(arr);
console.log(sum);

//===Output:===📌
//145