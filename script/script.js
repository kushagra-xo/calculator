// DOM Elements
let view = document.getElementById('view');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let numbers = document.querySelectorAll('.num');
let operationElements = document.querySelectorAll('.operator');

// Defaults
view.textContent = 0;

// Operations Object
const operations = {
	'+': (a, b) => a + b,
	'-': (a, b) => a - b,
	'*': (a, b) => a * b,
	'/': (a, b) => a / b
};

// Event Handlers
function operate(fullOperation) {
	let [firstOperand, operator, secondOperand] = fullOperation.split(' ', 3);
	if (firstOperand.endsWith('%')) {
		firstOperand = Number(firstOperand.slice(0, -1)) / 100;
	}
	if (secondOperand.endsWith('%')) {
		secondOperand = Number(secondOperand.slice(0, -1)) / 100;
	}
	view.textContent = operations[operator](Number(firstOperand), Number(secondOperand));
	if (view.textContent != 0) {
		clear.textContent = 'X';
	}
}

function handleNumClick() {
	if (view.textContent.endsWith('%')) {
		return;
	} else if (view.textContent == 0) {
		view.textContent = this.textContent;
	} else {
		view.textContent += this.textContent;
	}
	clear.textContent = 'C';
}

function handleOperationClick() {
	if (view.textContent.endsWith(' ')) {
		view.textContent = view.textContent.slice(0, -3);
	} else if (view.textContent.includes(' ')) {
		return;
	}
	view.textContent += ` ${this.textContent} `;
	clear.textContent = 'C';
}

function handleClearClick() {
	if (clear.textContent == 'X') {
		view.textContent = 0;
		clear.textContent = 'C';
	} else if (view.textContent.length == 1) {
		view.textContent = 0;
	} else if (view.textContent.endsWith(' ')) {
		view.textContent = view.textContent.slice(0, -3);
	} else {
		view.textContent = view.textContent.slice(0, -1);
	}
}

// Event Listeners
equal.addEventListener('click', () => operate(view.textContent));
clear.addEventListener('click', handleClearClick);
numbers.forEach(number => {
	number.addEventListener('click', handleNumClick);
})
operationElements.forEach(operation => {
	operation.addEventListener('click', handleOperationClick);
})
