/* HW4
  Example 3 JavaScript code
*/

const r = Number(prompt("Enter the circle radius:"));

const circle = {
  circumference() {
    return 2*3.14*r;
  },
  area() {
    return 3.14*r**2;
  }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
