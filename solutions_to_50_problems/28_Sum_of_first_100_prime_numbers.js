// Coding challenge #28: 
// Calculate the sum of first 100 prime numbers

var n = 100;
console.log("Sum of first ", n, " primes is ", sumPrimes(n));

function sumPrimes(n) {
    var foundPrimes = 0;
    var i = 2;
    var sum = 0;

    while (foundPrimes < n) {
        if (isPrime(i)) {
            foundPrimes++;
            sum += i;
        }

        i++;
    }

    return sum;
}

// Returns true if number n is prime
function isPrime(n) {
    if (n < 2)
        return false;

    if (n == 2)
        return true;

    var maxDiv = Math.sqrt(n);

    for (var i = 2; i <= maxDiv; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// //===Output:===📌

//Sum of first  100  primes is  24133