// Codewars
// Kata: Nesting Structure Comparison
// https://www.codewars.com/kata/520446778469526ec0000001
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

Array.prototype.sameStructureAs = function(other) {
  if (this.length !== other.length) {
    return false;
  }
  for (var i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && Array.isArray(other[i])) {
      if (!this[i].sameStructureAs(other[i])) {
        return false;
      }
    } else if (!Array.isArray(this[i]) && Array.isArray(other[i])) {
      return false;
    } else if (Array.isArray(this[i]) && !Array.isArray(other[i])) {
      return false;
    }
  }
  return true;
};

console.log([1, [1, 1]].sameStructureAs([2, [2, 2], 2]));
