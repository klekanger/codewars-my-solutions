// Codewars
// Kata: Sum of digits/digital root
// https://www.codewars.com/kata/541c8630095125aba6000c00
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

function digital_root(n) {
  let strNum = n.toString(),
    len = strNum.length,
    sum = 0;

  for (let i = 0; i < len; i++) {
    sum += +strNum.charAt(i);
  }

  return len > 1 ? digital_root(sum) : sum;
}
