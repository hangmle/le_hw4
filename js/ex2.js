/* HW4
  Example 2 JavaScript code
*/

const f = Number(prompt('Enter the Fahrenheit temperature'));

function convertF(f) {
  return (f-32)*(5/9);
}

if (f === 212) {
  console.log(`Water boiling temperate is ${f} Fahrenheit or ${convertF(f)} Celsius degrees`);
};
if (f === 32) {
  console.log(`${f} degrees Fahrenheit = ${convertF(f)} degrees Celcius`);
};
if (f === 98.7) {
  console.log(`Temperature of ${f} Fahrenheit is equivalent to ${convertF(f)} degrees Celcius`);
};