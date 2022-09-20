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


// NOT DONE

let min;
for (m = 0; m < values.length; m++) {
  values.forEach(m => {
    if (values[m] > values[m+1]) {
      values.shift();
    };
    if (values[m] < values[m+1]) {
      values.splice(1,1);
    }
  })

  // if (values[m] > values[m+1]) {
  //   values.slice(1);
  //   min = values[m+1];
  // };
  // if (values[m] < values[m+1]) {
  //   values.splice(0,1);
  //   min = values[m];
  // }

  // if (values[m] > values[m+1]) {
  //   values = values.slice(2);
  // };
  // min = values[0];
  min = values[0];
  m++;
}
console.log(`Minimum value of the array is ${min}`);
