let num1 = Number;

let num2 = Number;

const buttons = document.querySelectorAll('.btn');
const displayBox = document.getElementById('displayBox');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the text content of the clicked button
        const buttonText = button.textContent;
        
        // Update the displayBox content with the button text
        displayBox.textContent = buttonText;
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

let operator = ['+', '-', '*', '/']; 

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


