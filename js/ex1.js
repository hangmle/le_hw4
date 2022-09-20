/* HW4
  Example 1 JavaScript code
*/

const num1 = Number(prompt('Enter the first number'));
const num2 = Number(prompt('Enter the second number'));
const op = prompt('Enter the mathematical operation (+ - * /)');

function result() {
  if (op === '+') {
    return num1+num2;
  }
  if (op === '-') {
    return num1-num2;
  }
  if (op === '*') {
    return num1*num2;
  }
  if (op === '/') {
    return num1/num2;
  }
}

function mathResult(num1, num2, op) {
  console.log(`${num1} ${op} ${num2} = ${result()}`)
  };

mathResult(num1, num2, op);