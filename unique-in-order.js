// Codewars
// Kata: Unique in order
// https://www.codewars.com/kata/54e6533c92449cc251001667
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

var uniqueInOrder = function(iterable) {
  return [...iterable].filter((el, i, arr) => el !== arr[i - 1]);
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder([1, 2, 2, 3, 3], 2, "a"));

// ***** Alternative solution ****
// var uniqueInOrder = function(iterable) {
//   outputArr = [];
//   lastElement = "";
//   if (typeof iterable === "string") {
//     iterable = iterable.split("");
//   }
//   iterable.forEach(element => {
//     element !== lastElement ? outputArr.push(element) : null;
//     lastElement = element;
//   });
//   return outputArr;
// };
