String.prototype.camelCase = function() {
  return this.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

console.log("camel case method".camelCase());
console.log("say hello ".camelCase());
console.log("".camelCase());
