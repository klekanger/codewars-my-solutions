// Codewars
// Kata: Make a function that does arithmetic!
// https://www.codewars.com/kata/make-a-function-that-does-arithmetic/solutions/javascript/me/best_practice
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
      return null;
  }
}
