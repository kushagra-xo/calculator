// DOM Elements
let view = document.getElementById('view');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let numbers = document.querySelectorAll('.num');
let operations = document.querySelectorAll('.operator');

// Defaults
view.textContent = 0;

// Event Handlers
function operate(fullOperation){
	operationArray = fullOperation.split(' ', 3);
	let firstOperand = Number(operationArray[0]);
	let operator = operationArray[1];
	let secondOperand = Number(operationArray[2]);

	if (operator == '+') {
		view.textContent = firstOperand + secondOperand;	
	} else if (operator == '-') {
		view.textContent = firstOperand - secondOperand;	
	} else if (operator == '*') {
		view.textContent = firstOperand * secondOperand;	
	} else if (operator == '/') {
		view.textContent = firstOperand / secondOperand;	
	}
	clear.textContent = 'X';
}

function handleNumClick(){
	if (view.textContent == 0) {
		view.textContent = this.textContent;
		return;
	}
	view.textContent += this.textContent;	
	clear.textContent = 'C';
}

function handleOperationClick(){
	view.textContent += ` ${this.textContent} `;
	clear.textContent = 'C';
}

function handleClearClick(){
	if (clear.textContent == 'X') {
		view.textContent = 0;	
		clear.textContent = 'C';
	}
	if (view.textContent.length == 1) {
		view.textContent = 0;
		return;
	}
	view.textContent = view.textContent.slice(0,-1);
}

// Event Listeners
equal.addEventListener('click', () => operate(view.textContent));

clear.addEventListener('click', handleClearClick);

numbers.forEach( number => {
	number.addEventListener('click', handleNumClick);
})

operations.forEach( operation => {
	operation.addEventListener('click', handleOperationClick);
})
