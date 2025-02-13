const temperatures = [
  22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30,
  27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26,
];

// 1) Write a `filterHighTemperatures` function that returns a new array containing temperatures greater than or equal to 25 degrees Celsius.
function filterHighTemperatures(temps) {
  let newTemps = temps.filter((temp) => temp >= 25);
  return newTemps;
}

// Write a `filterLowTemperatures` function that returns a new array containing temperatures less than 20 degrees Celsius.
function filterLowTemperatures(temps) {
  let newTemps = temps.filter((temp) => temp < 20);
  return newTemps;
}

// Write a `convertCelsiusToFahrenheit` function that converts the entire list of temperatures to Fahrenheit, and return it. Use the formula (Celsius * 9/5) + 32.
function convertCelsiusToFahrenheit(temps) {
  let newTemps = temps.map((temp) => (temp * 9) / 5 + 32);
  return newTemps;
}

// Write a `labelTemperatures` function that returns a new array that labels each temperature as either:
// "Warm" for temperatures >=25,
// "Mild" for temperatures between 20 and 24,
// "Cool" for temperatures <20
function labelTemperatures(temps) {
  let newTemps = temps.map((temp) => {
    if (temp >= 25) {
      return "Warm";
    } else if (temp >= 20 && temp <= 24) {
      return "Mild";
    } else {
      return "Cool";
    }
  });
  return newTemps;
}

// Write a `getMaxTemperature` function that calculates and return the highest temperature of the month.
function getMaxTemperature(temps) {
  // Your code here
  let top = 0;
  temps.forEach((element) => (top >= element ? (top = top) : (top = element)));
  return top;
}

// Write a `getMinTemperature` function that calculates and return the lowest temperature of the month.
function getMinTemperature(temps) {
  let bot = 50;
  temps.forEach((element) => (bot <= element ? (bot = bot) : (bot = element)));
  return bot;
}

module.exports = {
  filterHighTemperatures,
  filterLowTemperatures,
  convertCelsiusToFahrenheit,
  labelTemperatures,
  getMaxTemperature,
  getMinTemperature,
};
