function isPalindrome(string) {
  // Write your algorithm here
   const reversestring = reverse(string);
   if (string === reversestring) {
   return true;
  }
  else {
    return false;
  }
}

/* 
  Add your pseudocode here
  define a function called isPalindrome which takes a string
  create a new string containing the reversed string
  use if statement to check if string is false or true. if string is reversed return true
  if otherwise use else and it will return false
*/

/*
  Add written explanation of your solution here
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
