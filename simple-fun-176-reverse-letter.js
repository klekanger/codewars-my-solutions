function reverseLetter(str) {
  return str
    .replace(/[^a-z]/gi, "")
    .split("")
    .reverse()
    .join("");
}

console.log(reverseLetter("kris4h=?an"));
