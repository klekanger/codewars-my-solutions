function iqTest(numbers) {
  let numArr = numbers.split(" ").map(function(e) {
    return parseInt(e, 10);
  });

  [1, 2, 2, 7, 3, 8].forEach((e, i) =>
    e % 2 === numArr[i - 1] % 2 ? console.log("ja") : console.log("nei")
  );
}
