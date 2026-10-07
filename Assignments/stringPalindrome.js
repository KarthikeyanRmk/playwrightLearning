//Understand how to reverse a string and check for palindromes in JavaScript by manipulating strings and using conditional logic.

function stringReverse(str1) {
  //const strReverse=str1.toLowerCase().split("").reverse().join("");
  //console.log(str1);
  const str2 = str1.toLowerCase();
  let strReverse = "";
  //console.log(str2);

  for (let i = str2.length - 1; i >= 0; i--) {
    strReverse = strReverse + str2[i];
  }
  console.log(strReverse);
  if (str2 === strReverse) {
    return true;
  } else {
    return false;
  }
}

//console.log(stringReverse("Hello"));
console.log(stringReverse("Mom"));
