// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //   let array = str.split("");
  //   let reversedArray = [];
  //   //   for (i = 0; i < array.length; i++) {
  //   //     reversedArray.unshift(array[i]);
  //   //   }
  //   return array.reverse().join();
  //   //   return reversedArray.join("");
  return str.split("").reverse().join("");
}

module.exports = reverse;
