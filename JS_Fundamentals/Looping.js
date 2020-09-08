// This function akes an array and returns a new
// array of every number in the array that is divisible
// by either 3 or 5, but not both.
function fizzBuzz(array) {
  const magic1 = 3;
  const magic2 = 5;
  function isDivisible(value) {
    if (value % 3 === 0 && value % 5 === 0) {
      return false;
    } else if (value % 3 === 0) {
      return true;
    } else if (value % 5 === 0){
      return true;
    } else {
      return false;
    }
  }

  const res = array.filter(isDivisible);
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