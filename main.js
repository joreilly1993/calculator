const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('#equalsBtn')
const clearButton = document.querySelector('#clearBtn')
const deleteButton = document.querySelector('#delBtn')
const decimalButton = document.querySelector('#decimalBtn')
const percentageButton = document.querySelector('#percentageBtn');
const firstInput = document.querySelector('#firstInput');
const operatorInput = document.querySelector('#operatorInput');
const secondInput = document.querySelector('#secondInput');
const answer = document.querySelector('#answer');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      if(operatorInput.textContent === ''){
        firstInput.textContent += button.textContent;
      } else if(operatorInput.textContent !== '') {
        secondInput.textContent += button.textContent;
      };
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      operatorInput.textContent = button.textContent;
    });
});

equalsButton.addEventListener('click', () => {
  if(operatorInput.textContent === '/' && secondInput.textContent === '0') {
    answer.textContent = 'Can\'t divide by zero!'
  } else {
    answer.textContent = operate(operatorInput.textContent, firstInput.textContent, secondInput.textContent)
  }
})

clearButton.addEventListener('click', () => {
  firstInput.textContent = '';
  secondInput.textContent = '';
  operatorInput.textContent = '';
  answer.textContent = '';
})

deleteButton.addEventListener('click', () => {
  if(secondInput.textContent !== ''){
    secondInput.textContent = secondInput.textContent.slice(0, -1);
  } else if(secondInput.textContent === '' && operatorInput.textContent !== ''){
    operatorInput.textContent = '';
  } else if(operatorInput.textContent === ''){
    firstInput.textContent = firstInput.textContent.slice(0, -1);
  }
})

decimalButton.addEventListener('click', () => {
if(operatorInput.textContent === '' && !firstInput.textContent.includes('.')){
    firstInput.textContent = firstInput.textContent += '.';
  }
  else if(operatorInput.textContent !== '' && !secondInput.textContent.includes('.')){
    secondInput.textContent = secondInput.textContent += '.';
  }
})

percentageButton.addEventListener('click', () => {
  if(firstInput.textContent !== '' && secondInput.textContent === ''){
    firstInput.textContent = firstInput.textContent * .01;
  } else if(secondInput.textContent !== '' && answer.textContent === '') {
    secondInput.textContent = secondInput.textContent * .01;
  } else if(answer.textContent !== '') {
    answer.textContent = answer.textContent * .01;
  }
})

  function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return substract(a, b)
    case '*':
      return multiply(a, b)
    case '/':
      return divide(a, b)
    default:
      return null
  }
}