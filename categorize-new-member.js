// function openOrSenior(data) {
//   return data.map(member => {
//     if (member[0] >= 55 && member[1] > 7) {
//       return "Senior";
//     }
//     return "Open";
//   });
// }

function openOrSenior(data) {
  return data.map(member => {
    return member[0] >= 55 && member[1] > 7 ? "Senior" : "Open";
  });
}

console.log(
  openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])
);
