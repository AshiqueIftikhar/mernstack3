// Coding challenge #14: 
// Print the first 10 Fibonacci numbers without recursion

// var f0 = 1;
// var f1 = 1;
// var fibArray=[];
// for(let i=0; i<10; i++)
// {
//     if(i<2)
//     {
//         fibArray[i]=f0;
//     }
//     else
//     {
//         fibArray[i]=fibArray[i-1] + fibArray[i-2]
//     }
// }
// console.log(fibArray)


var f0 = 0;
console.log(f0);
var f1 = 1;
console.log(f1);
var fi =0;
for(var i=3; i<=10; i++)
{
    fi = f0 + f1;
    console.log(fi);
    f0 = f1;
    f1 = fi
}

// //===Output:===📌
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34