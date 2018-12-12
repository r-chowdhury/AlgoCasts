// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let solutionArray = []
  let word = 0
  str = str.split(" ")
  for (let char of str) {
    word = char[0].toUpperCase()
    word += char.slice(1)
    solutionArray.push(word)
  }
  return solutionArray.join(" ")
}

console.log(capitalize("Hi, my name is Ryhan"))

module.exports = capitalize;
