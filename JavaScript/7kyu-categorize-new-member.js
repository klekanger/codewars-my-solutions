// Codewars
// Kata: Categorize New Member
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

function openOrSenior(data) {
  return data.map(member => {
    return member[0] >= 55 && member[1] > 7 ? "Senior" : "Open";
  });
}

// Alternative solution
//
// function openOrSenior(data) {
//   return data.map(member => {
//     if (member[0] >= 55 && member[1] > 7) {
//       return "Senior";
//     }
//     return "Open";
//   });
// }
