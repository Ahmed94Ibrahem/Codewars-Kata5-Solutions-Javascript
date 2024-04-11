// Simple Pig Latin

// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Solution

// Convert the string into array
// Loop through the array
// Replace the first character with empty string
// Add the first character to the end of the word
// Add the "ay" to the end of the word
// Convert the array back to string

function pigIt(str) {
  return str
    .split(" ")
    .map((word) => {
      if (/^[A-Za-z]/.test(word)) {
        return word.replace(word[0], "") + word[0] + "ay";
      } else {
        return word;
      }
    })
    .join(" ");
}

console.log(pigIt("Hello world !")); // igPay
