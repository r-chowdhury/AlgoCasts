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
  let temp = n
  n = Math.abs(n)
  let stringInt = n.toString()
  console.log(stringInt)
  const reversedStringInt = stringInt.split("").reverse().join("")
  console.log(parseInt(reversedStringInt))
  if (temp > 0) {
    return parseInt(reversedStringInt)
  } else if (temp < 0) {
    return parseInt(reversedStringInt) * -1
  } else {
    return 0
  }
}

console.log(reverseInt(-100))

module.exports = reverseInt;
