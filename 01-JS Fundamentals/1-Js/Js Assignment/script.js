// The Complete JavaScript Course 14
// JavaScript Fundamentals – Part 2
// Note: Please start Part 2 from scratch and comment out all the code from Part 1.
// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

function describeCity(country, population, capitalCity) {
  console.log(
    `${country} has ${population} Million people and its capital is ${capitalCity}`
  );
}

describeCity("Pakistan", "6", "Islamabad");

// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

let describeCity2 = (country2, population2, capitalCity2) => {
  console.log(
    `${country2} has ${population2} Million people and its capital is ${capitalCity2}`
  );
};
describeCity2("Pakistan2", "62", "Islamabad2");

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

const totalPop = 7900;
function percentageOfWorld1(pop) {
  return (pop / totalPop) * 100;
}

// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

let popArr = [2200, 2300, 3300, 1100];
if (popArr.length == 4) console.log(true);
else console.log(false);
let perArr = [];
for (let i = 0; i < popArr.length; i++) {
    perArr.push(percentageOfWorld1(popArr[i]));
}
console.log(perArr);