// This function akes an array and returns a new
// array of every number in the array that is divisible
// by either 3 or 5, but not both.
function fizzBuzz(array) {
  const res = [];
  array.forEach(element => {
    if ((element % 3 === 0) ^ (element % 5 === 0)) {
      res.push(element);
    }
  });
  return res;
}

// Return true if 'number' is prime, false otherwise.
// Assume number is a positive integer.
function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

// A function that returns the sum of the first n prime numbers.
function sumOfNPrimes(n) {
  let sum = 0;
  let i = 0;
  let number = 0;
  while (i < n) {
    if (isPrime(number)) {
      sum += number;
      i++;
    }
    number++;
  }
  return sum;
}

// Test
console.log(isPrime(10));
console.log(fizzBuzz([1, 2,  3, 5, 9, 15, 45]));
console.log(sumOfNPrimes(4));