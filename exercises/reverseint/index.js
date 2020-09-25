// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let sign = Math.sign(n); // 1 or -1
  let revStr = (sign * n).toString().split("").reverse().join("");
  return sign * parseInt(revStr);
}

module.exports = reverseInt;
