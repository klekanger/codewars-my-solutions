// Codewars
// Kata: Beginner Series #3 Sum of Numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

function GetSum(a, b) {
  let sum = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  for (num = min; num <= max; num++) {
    sum += num;
  }
  return sum;
}
