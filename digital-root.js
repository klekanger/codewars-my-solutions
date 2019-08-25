function digital_root(n) {
  let strNum = n.toString(),
    len = strNum.length,
    sum = 0;

  for (let i = 0; i < len; i++) {
    sum += +strNum.charAt(i);
  }

  return len > 1 ? digital_root(sum) : sum;
}

console.log(digital_root(195));
