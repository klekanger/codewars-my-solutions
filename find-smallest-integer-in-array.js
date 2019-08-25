// Codewars
// Kata: Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

let sif = new SmallestIntegerFinder();

console.log(sif.findSmallestInt([78, 56, 232, 12, 8]));
