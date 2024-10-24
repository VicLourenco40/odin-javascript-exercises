const add = function(num, num2) {
  return num + num2;
};

const subtract = function(num, num2) {
  return num - num2;
};

const sum = function(nums) {
  return nums.reduce((total, num) => total + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, num) => total * num);
};

const power = function(num, num2) {
  return num ** num2;
};

const factorial = function(num) {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
