/* HW4
  Example 7 JavaScript code
*/

// Generate 10 numbers from 1-10
// for (let i=1; i<=10; i++) {
//   const rand = Math.floor((Math.random()*10)+1);
//   console.log(rand);
// }

const rand = Math.floor((Math.random()*100)+1);

input = Number(prompt('Please guest the number generated by the system'));
let i=1;
if (input === rand) {
  alert(`Correct! It took you ${i} attempts to guess the correct number`)
}
while (input !== rand) {
  if (input >= rand+20) {
    input = Number(prompt('Too high. Guest again'));
  }
  if (input <= rand-20) {
    input = Number(prompt('Too low. Guest again'));
  }
  if (((input>rand) && (input<rand+20)) || ((input<rand) && (input>rand-20))) {
    input = Number(prompt("It's close. Guest again"));
  }
  i++;
  if (input === rand) {
    alert(`Correct! It took you ${i} attempts to guess the correct number`)
  }
}