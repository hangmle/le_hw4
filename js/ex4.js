/* HW4
  Example 4 JavaScript code
*/

const values = [3, 11, 7, 2, 9, 10];

let sum = 0;
for (i = 0; i < values.length; i++) {
  sum += values[i];
}
// OR:
// values.forEach(i => {
//   sum += i;
// });
console.log(`Sum of the array values is ${sum}`);


let min = values[0];
let max = values[0];

for (i = 1; i < values.length; i++) {
  if (values[i] < min) {
    min = values[i];
  }
  if (values[i] > max) {
    max = values[i];
  }
}

console.log(`Minimum value of the array is ${min}`);
console.log(`Maximum value of the array is ${max}`);
