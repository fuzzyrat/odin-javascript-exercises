const convertToCelsius = function(temp) {
  let newValue = (temp - 32) * (5/9);
  if (newValue % 1 == 0) return Math.round(newValue);
  else return Number(newValue.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let newValue = (temp * (9/5) + 32);
  if (newValue % 1 == 0) return Math.round(newValue);
  else return Number(newValue.toFixed(1));
  ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
