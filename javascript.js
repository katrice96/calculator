let num1 = ''
let num2 = ''
let operator = ''

const buttons = document.querySelectorAll('.btn');
const displayBox = document.getElementById('displayBox');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        // Check if the button is a number or decimal using OR  
        if (!isNaN(parseInt(buttonText)) || buttonText === '.') {
            // uses an equality operation to check type of input and add the value of a button to the displayBox
            if (operator === '') {
                num1 += buttonText;
                displayBox.textContent = num1;
            } else {
                num2 += buttonText;
                displayBox.textContent = num2;
            }
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            operator = buttonText;
            displayBox.textContent += ' ' + operator + ' ';
        } else if (buttonText === '=') {
            if (num1 !== '' && num2 !== '' && operator !== '') {
                const result = operate(parseFloat(num1), operator, parseFloat(num2));
                displayBox.textContent = result;
                num1 = result.toString();
                num2 = '';
                operator = '';
            }
        } else if (buttonText === 'c') {
            num1 = '';
            num2 = '';
            operator = '';
            displayBox.textContent = '';
        }
    });
});




function add(num1, num2) {

    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function divide(num1,num2) {
    return num1 / num2; 
}

function multiply(num1,num2) {
    return num1 * num2; 
}

//let operator = ['+', '-', '*', '/']; 

let operate = function(num1,operator,num2) {
    //will take in an operator and two numbers and then calls one of the above functions depending on which operator is brought in
    switch (operator) {
        case '+':
          return add(num1, num2);
        case '-':
          return subtract(num1, num2);
        case '*':
          return multiply(num1, num2);
        case '/':
          return divide(num1, num2);
        default:
          return 'Invalid operator';
      }

}


