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
  let revWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    revWord += word[i];
  }
  if (revWord.toLowerCase() !== word.toLowerCase()) {
    return "is not a palindrome";
  } else {
    return "is a palindrome";
  }
}

const word = prompt('Please enter a word');
countV(word);
pld(word);
console.log(`${word} contains ${countV(word)} vowels and ${pld(word)}`);
