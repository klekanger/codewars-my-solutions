var rotate = function(nums, k) {
  nums.splice(k + 1).concat(nums.splice(0, k + 1));
  console.log("nums=" + nums);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
