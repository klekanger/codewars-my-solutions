// Codewars
// Kata: Binary to Text (ASCII) Conversion
// https://www.codewars.com/kata/5583d268479559400d000064/
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

function binaryToString(binary) {
  if (!binary | (binary === '')) return '';
  return binary
    .match(/.{1,8}/g)
    .map((el) => String.fromCharCode(parseInt(el, 2)))
    .join('');
}

// Alternate solution
/* function binaryToString(binary) {
  if (!binary | (binary === '')) return '';
  let convertedStr = '';
  binary.match(/.{1,8}/g).map((el) => {
    convertedStr += String.fromCharCode(parseInt(el, 2));
  });
  return convertedStr;
} */

console.log(
  binaryToString('01001011010101000100100001011000010000100101100101000101')
);
