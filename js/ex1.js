/* HW4
  Example 1 JavaScript code
*/

const num1 = Number(prompt('Enter the first number'));
const num2 = Number(prompt('Enter the second number'));
const op = prompt('Enter the mathematical operation (+ - * /)');

let sum = num1+num2;
let sub = num1-num2;
let mul = num1*num2;
let div = num1/num2;

function mathResult(num1, num2, op) {
  if (op === '+') {
    console.log(`${num1} ${op} ${num2} = ${sum}`)
  };
  if (op === '-') {
    console.log(`${num1} ${op} ${num2} = ${sub}`)
  };
  if (op === '*') {
    console.log(`${num1} ${op} ${num2} = ${mul}`)
  };
  if (op === '/') {
    console.log(`${num1} ${op} ${num2} = ${div}`)
  };
};

mathResult(num1, num2, op);