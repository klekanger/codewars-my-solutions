// Codewars
// Kata: Flatten and sort an array
// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return [].concat(...array).sort((a, b) => a - b);
}
