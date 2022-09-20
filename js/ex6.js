/* HW4
  Example 6 JavaScript code
*/

const vowels = ['a','e','i','o','u','y'];

function countV(word) {
  let count = 0;
  for (let letter of word.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count
}

function pld(word) {
  ...
}

const word = prompt('Please enter a word');
countV(word);
console.log(`${word} contains ${countV(word)} vowels`);
