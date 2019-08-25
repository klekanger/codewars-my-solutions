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

console.log(list([{ name: "Bart" }]));
