const add = function(val1, val2) {
	return val1 + val2
};

const subtract = function(val1, val2) {
	return val1 - val2;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
    return array.reduce((total, current) => total * current);

};

const power = function(val1, val2) {
	return Math.pow(val1, val2);
};

const factorial = function(n) {
	let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
