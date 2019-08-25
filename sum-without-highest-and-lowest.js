// Codewars
// Kata: Sum without highest and lowest number
// https://www.codewars.com/kata/sum-without-highest-and-lowest-number/solutions/javascript/me/best_practice
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

function sumArray(array) {
  return !array
    ? 0
    : array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, curr) => {
          return acc + curr;
        }, 0);
}
