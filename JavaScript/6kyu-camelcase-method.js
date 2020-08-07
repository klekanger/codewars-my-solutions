// Codewars
// Kata: CamelCase Method
// https://www.codewars.com/kata/587731fda577b3d1b0001196
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

String.prototype.camelCase = function() {
  return this.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};
