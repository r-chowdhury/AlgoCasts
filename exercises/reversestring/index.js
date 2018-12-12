// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = ""
  debugger
  if (str.length === 1) {
    return str
  }

  let lastLetter = str[str.length-1]
  reversed += lastLetter 
  return reversed + reverse(str.substring(0, str.length-1))
  
}

reverse("asdf")

module.exports = reverse;
