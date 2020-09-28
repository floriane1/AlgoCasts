// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // using SLICE
  //   const words = [];
  //   for (let word of str.split(" ")) {
  //     words.push(word[0].toUpperCase() + word.slice(1));
  //   }
  //   return words.join(" ");

  // alternative
  let result = str[0].toUpperCase(); // firs character always upcased
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") result += str[i].toUpperCase();
    else result += str[i];
  }
  return result;

  // another alternative
  //   arr = str.split("");
  //   newArr = [];
  //   for (const [index, value] of arr.entries()) {
  //     if (index === 0 || arr[index - 1] === " ") newArr.push(value.toUpperCase());
  //     else newArr.push(value);
  //   }
  //   return newArr.join("");
}

module.exports = capitalize;
