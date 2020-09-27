// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }
  return Object.keys(chars).reduce((a, b) => (chars[a] > chars[b] ? a : b));

  // alternative
  //   let max = 0;
  //   let charMax = "";
  //   for (let char in chars) {
  //     if (chars[char] > 0) {
  //       max = chars[char];
  //       charMax = char;
  //     }
  //   }
  //   return charMax;
}

module.exports = maxChar;
