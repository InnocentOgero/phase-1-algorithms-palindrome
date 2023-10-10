const word='madam'

function isPalindrome(word) {
  // Write your algorithm here
  const characters=word.split('')
  const reversedCharacters=characters.reverse()
  const reversedWord=reversedCharacters.join('')
  if(word.toLowerCase()===reversedWord.toLowerCase()){
    return true

  }
  else{
    return false
  }
  
}
console.log(isPalindrome(word))

/* 
  const characters=word.split('')
  const reversedCharactes=characters.reverse()
  const reversedWord=reversedCharacters.join('')
  if word.toLowerCase===reversedWord.toLowerCase
    return true
  else
    return false
  define 
*/

/*
  Add written explanation of your solution here
  first convert the word to read backwards by
use the split method to split the word into an array of characters
use the reverse method to reverse the characters in the array
use the join method to join the characters
check if the word in lowercase is the same as the word converted backwards and in lowercase
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
