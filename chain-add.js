function add(n) {
  const nextSum = n2 => add.call(null, n + n2);
  nextSum.valueOf = () => n;
  return nextSum;
}

console.log(add(5)(55)(5));
