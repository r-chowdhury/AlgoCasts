// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxChar = ""
  let wordCount = {}
  for (let i = 0; i < str.length; i++) {
    if (wordCount[str[i]] === undefined) {
      wordCount[str[i]] = 1
    } else {
      wordCount[str[i]] += 1
    }
  }
  let count = 0
  for (var key in wordCount) {
    if (wordCount[key] > count) {
      count = wordCount[key]
      maxChar = key 
    }
  }
  return maxChar
}

maxChar('abcdefghijklmnaaaaa')

module.exports = maxChar;
