// Moving Zeros To The End

// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// Solution

// Filter The Array to remove 0 Values
// Find the length of the 0 Values
// Fill the Filtered Array With 0 Values
// Return the Final Array

function moveZeros(arr) {
  let filteredArray = arr.filter((item) => item !== 0);
  let zeroLength = arr.length - filteredArray.length;
  filteredArray = filteredArray.concat(Array(zeroLength).fill(0));
  return filteredArray;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
