// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // using Regex
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
  // alternative to Regex
  //   const vowels = ["a", "e", "i", "o", "u"];
  //   let count = 0;
  //   for (let letter of str.toLowerCase()) {
  //     if (vowels.includes(letter)) count++;
  //   }
  //   return count;
}

module.exports = vowels;
