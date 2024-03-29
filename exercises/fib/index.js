// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Recursive SOLUTION // EXPONENTIAL TIME ALGORITHMS ARENT ACCEPTED IN AN INTERVIEW
// A Way this can be fixed or improved is using MEMOIZATION SEE BELOW. 
// By storing the function it made it easier to recall the function calling spread args.
function memoize(fn) {
const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
      const result = fn.apply(this, args);
      cache[args] = result;

      return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }
   return fib(n - 1) + fib(n - 2);
}
fib = memoize(fib);

module.exports = fib;
 // Iterative SOLUTION
// can be result.length -1 or i -1 same goes for result.length -2
//function fib(n) {
//  const result = [0, 1];

//  for (let i = 2; i <= n; i++) {
//  const a = result[result.length -1];
//  const b = result[result.length -2];

//   result.push(a + b);
 //}
   // Could also return.result[n] or result[n]
//   return result[result.length -1];
//}
