// Codewars
// Kata: Sort the given array of strings in alphabetical order, case insensitive.
// https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

sortme = function (names) {
  return names.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
};
