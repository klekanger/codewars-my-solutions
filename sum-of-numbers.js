function GetSum(a, b) {
  let sum = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  for (num = min; num <= max; num++) {
    sum += num;
  }
  return sum;
}

console.log(GetSum(1, 3));
