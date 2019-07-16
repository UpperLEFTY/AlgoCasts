// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
// need to turn it in an array before reversing it

// ---SOLUTION 1
// function reverse(str) {
//  return str
//     .split('')
//     .reverse()
//       .join('');
//}

// module.exports = reverse;

// ---SOLUTION 2

// function reverse(str) {
//   let reversed = '';

//   for(let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }
// --- SOLUTION 3 using reduce!
 function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev , '')
 }


  module.exports = reverse;
