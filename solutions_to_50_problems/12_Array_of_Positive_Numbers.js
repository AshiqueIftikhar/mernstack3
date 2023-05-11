// Coding challenge #12: 
// Create a function that receives an array of numbers and returns an array containing only the positive numbers

// function positiveArray(myArray)
// {
//     var posArray = [];
//     for(var i=0; i<myArray.length; i++)
//     {
//         if(myArray[i] >= 0)
//         {
//             posArray.push(myArray[i]);
//         }
//     }
//     return posArray;
// }

// var myArray = [-5, 10, -3, 12, -9, 5, 90, 0, 1]
// console.log(positiveArray(myArray));


// function getPositives(ar) {
//     return ar.filter(el => el >= 0);
// }

// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var ar2 = getPositives(ar);
// console.log(ar2);

// //===Output:===📌
// //[ 10, 12, 5, 90, 0, 1 ]

function arrayPositive(arrColl)
{
    var arrColl2 = [];
    for(var item of arrColl)
    {
        if(item>=0)
        {
            arrColl2.push(item);
        }
    }
    return arrColl2;    
}

var anArray =[-5, 10, -3, 12, -9, 5, 90, 0, 1]
console.log(arrayPositive(anArray));

// //===Output:===📌
// //[ 10, 12, 5, 90, 0, 1 ]
