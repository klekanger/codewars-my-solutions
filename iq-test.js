function iqTest(numbers) {
  let numArr = numbers.split(" ").map(function(e) {
    return parseInt(e, 10);
  });

  [1, 2, 2, 7, 3, 8].forEach((e, i) =>
    e % 2 === numArr[i - 1] % 2 ? console.log("ja") : console.log("nei")
  );
}

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 1 1"));
