// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0 
  str = str.replace(/[^\w]/g, '')
  for (let char of str) {
    if (char.toLowerCase() === 'a' || char.toLowerCase() ==='e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u' ) {
      count += 1
    }
  }

  return count
}

console.log(vowels('Hi There!'))
module.exports = vowels;
