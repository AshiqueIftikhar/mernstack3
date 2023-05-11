// Coding challenge #13: 
// Find the maximum number in an array of numbers

function MaxNumber(arr)
{
    var arrLength = arr.length;
    var max = arr[0];
    for(let i=0; i<arrLength; i++)
    {
        if(arr[i] > max)
        {
            max=arr[i];
        }
    }
    return max;
}

var arrayList = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
console.log("Max:",MaxNumber(arrayList));

// //===Output:===📌
// Max: 90