function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    return a / b; 
}

function multiply(a,b) {
    return a * b;
}

let num1 = a 

let num2 = b 

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


