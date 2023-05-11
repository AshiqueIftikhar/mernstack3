
// // Question: Write a function that takes an array of numbers as input and returns the sum of the squares of all even numbers in the array.
// //  Test Data:
// // const arr = [1, 2, 3, 4, 5];
// // console.log(sumOfEvenSquares(arr)); // Expected output: 20

// function sumOfEvenSquares(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) { // check if number is even
//         sum += arr[i] ** 2; // square the number and add to sum
//       }
//     }
//     return sum;
//   }

// const arr = [1,2,3,4,5]
// console.log(sumOfEvenSquares(arr))

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
  });

  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
}

createServer();


