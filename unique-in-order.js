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

var uniqueInOrder = function(iterable) {
  return [...iterable].filter((el, i, arr) => el !== arr[i - 1]);
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder([1, 2, 2, 3, 3], 2, "a"));
