sortme = function (names) {
  return names.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
};
