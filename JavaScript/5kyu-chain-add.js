// Codewars
// Kata: A Chain adding function
// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

function add(n) {
  const nextSum = n2 => add.call(null, n + n2);
  nextSum.valueOf = () => n;
  return nextSum;
}
