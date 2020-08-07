// Codewars
// Kata: Format a string of names like 'Bart, Lisa & Maggie'.
// https://www.codewars.com/kata/53368a47e38700bd8300030d
//
// Solution by Kurt Lekanger
// https://www.codewars.com/users/klekanger

function list(names) {
  let nameList = "";

  if (names.length === 1) {
    return names[0].name;
  } else {
    names.map((e, idx) => {
      names.length === idx + 1
        ? (nameList = nameList + " & " + e.name)
        : (nameList =
            nameList + e.name + (idx === names.length - 2 ? "" : ", "));
    });
    return nameList;
  }
}
