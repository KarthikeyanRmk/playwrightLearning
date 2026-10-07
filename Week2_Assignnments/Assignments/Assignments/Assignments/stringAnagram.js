//Learn how to manipulate strings and use looping statements in a programming language to solve practical problems.

/*
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5 
*/

const s = "Hello world";
const splittedVal = s.split(" ");
//console.log(splittedVal);
const lastIndex = splittedVal.length - 1;
const lastWord = splittedVal[lastIndex];
//console.log(lastWord);
const lastWordCount = lastWord.length;
console.log(lastWordCount);

/*
Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

const str = " fly me to the moon ";
const strTrim = str.trim();
//console.log(strTrim);
const strSplitted = strTrim.split(" ");
//console.log(strSplitted);
const strLastIndex = strSplitted.length - 1;
const strLastWord = strSplitted[strLastIndex];
const strLastWordLen = strLastWord.length;
console.log(strLastWordLen);

/*
Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
*/

/*
 Example:3
1. Remove spaces and convert all letters to the same case
2. Sort the Characters
3. Compare Sorted Strings
4. Return the Result
 */

function isAnagram(str1, str2) {
  //console.log(str1);
  //console.log(str2);
  const sameCaseStr1 = str1
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .sort()
    .join("");
  const sameCaseStr2 = str2
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .sort()
    .join("");
  //console.log(sameCaseStr1);
  //console.log(sameCaseStr2);
  if (sameCaseStr1 === sameCaseStr2) {
    return true;
  } else {
    return false;
  }
}
console.log(isAnagram("listen", "Silent"));
