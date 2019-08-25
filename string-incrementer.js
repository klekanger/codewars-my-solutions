function incrementString(strng) {
  const endsWithNumber = /\d+$/;

  return endsWithNumber.test(strng)
    ? endsWithNumber.exec(strng) + "3"
    : strng + "1";
}

console.log(incrementString("foobar23"));
