// Coding challenge #15: 
// Create a function that will find the nth Fibonacci number using recursion

// function fibRecur(n)
// {
//     if(n<2)
//     {
//         console.log(n)
//     }
//     console.log(fibRecur(n-1)+fibRecur(n-2))
// }

// fibRecur(10);

function findFibonacci(n) {
    if (n == 0)
        return 0;

    if (n == 1)
        return 1;

    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

var n = findFibonacci(10);
console.log(n);

// //===Output:===📌
// 55