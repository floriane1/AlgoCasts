// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// USING SORT METHOD ON ARRAY
function anagrams(stringA, stringB) {
  return sortString(stringA) === sortString(stringB);
}

function sortString(str) {
  const cleanStr = str.replace(/[^\w]/g, "").toLowerCase();
  return cleanStr.split("").sort().join("");
}

// alternative
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     // "in" because aCharMap is an Object
//     if (aCharMap[char] !== bCharMap[char]) return false;
//   }
//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   const cleanStr = str.replace(/[^\w]/g, "").toLowerCase();
//   for (let char of cleanStr) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

module.exports = anagrams;
