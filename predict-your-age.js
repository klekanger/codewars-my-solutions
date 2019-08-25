function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i] * arguments[i];
  }

  return Math.floor(Math.sqrt(result) / 2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
