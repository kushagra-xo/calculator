// DOM Elements

let view = document.getElementById('view')
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
}

function handleNumClick(){
	if (view.textContent == 0) {
		view.textContent = this.textContent	
		return;
	} else if (this.textContent == '=') {
		operate(view.textContent);
		return;	
	}
	view.textContent += this.textContent;	
}

function handleOperationClick(){
	view.textContent += ` ${this.textContent} `;
}

// Event Listeners
numbers.forEach( number => {
	number.addEventListener('click', handleNumClick);
})

operations.forEach( operation => {
	operation.addEventListener('click', handleOperationClick);
})
