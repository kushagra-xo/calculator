// Constants
const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
const operations = ["plus", "minus", "multiply", "divide"]

// DOM elements
let numbersElements = document.querySelectorAll('.num');
let operatorsElements= document.querySelectorAll('.operator');
let view = document.getElementById('view');

numbersElements.forEach(number => {
	number.addEventListener('click', handleClick);
})

operatorsElements.forEach(operator => {
	operator.addEventListener('click', handleClick);
})
