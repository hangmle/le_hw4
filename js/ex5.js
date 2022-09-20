/* HW4
  Example 5 JavaScript code
*/

// OR:
// function checkStop() {
//   word = prompt('Please enter a word');
//   if (word.toLowerCase() === "stop") {
//     console.log(wordList);
//   }
//   if (word.toLowerCase() !== "stop") {
//     wordList.push(word);
//     checkStop();
//   };
// }
// let wordList = [];
// checkStop();


let wordList = [];
let word = prompt('Please enter a word');

if ((wordList = []) && (word.toLowerCase() === "stop")) {
  console.log(`No word to display. ${word} was the first word entered.`)
}
while (word.toLowerCase() !== "stop") {
  wordList.push(word);
  word = prompt('Please enter a word');
  if (word.toLowerCase() === "stop") {
    console.log(wordList);
    break;
  }
}