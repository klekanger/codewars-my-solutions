// Codewars
// Kata: Find the unique number
// https://www.codewars.com/kata/find-the-unique-number-1/solutions/javascript/me/best_practice
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

function findUniq(arr) {
  return (
    arr.find(val => {
      return arr.indexOf(val) === arr.lastIndexOf(val);
    }) || 0
  );
}
