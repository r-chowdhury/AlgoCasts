// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
/*
  solutionObjOne = {}
  solutionObjTwo = {}
  for (blah) {
    if (!!solutionObj[char]) {
      solutionObj[char] += 1
    } else {
      solutionObj[char] = 1
    }
  }

  
*/

  let characterMapOne = {}
  let characterMapTwo = {}

  stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

  for (let char of stringA) {
    if (!characterMapOne[char]) {
      characterMapOne[char] = 1
    } else {
      characterMapOne[char] += 1
    }
  }

  for (let char of stringB) {
    if (!characterMapTwo[char]) {
      characterMapTwo[char] = 1
    } else {
      characterMapTwo[char] += 1
    }
  }

  for (let char in characterMapOne) {
    if (characterMapOne[char] !== characterMapTwo[char]) {
      return false 
    }
  }

  for (let char in characterMapTwo) {
    if (characterMapOne[char] !== characterMapTwo[char]) {
      return false 
    }
  }
  return true 
}

module.exports = anagrams;
