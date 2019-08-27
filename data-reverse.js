// Codewars
// Kata: Data Reverse
// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

function dataReverse(data) {
  let dataLength = data.length;
  let reversed = [];

  for (let i = 0; i < dataLength; i += 8) {
    reversed.push(data.slice(dataLength - i - 8, dataLength - i));
  }

  return [].concat.apply([], reversed);
}
