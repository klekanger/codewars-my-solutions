// Codewars
// Kata: Simple Fun #176: Reverse Letter
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

function reverseLetter(str) {
  return str
    .replace(/[^a-z]/gi, "")
    .split("")
    .reverse()
    .join("");
}
