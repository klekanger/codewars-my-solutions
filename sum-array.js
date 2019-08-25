function sumArray(array) {
  return !array
    ? 0
    : array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, curr) => {
          return acc + curr;
        }, 0);
}
