//Learn to calculate the total sum of all elements in a JavaScript array using loops and variables.

/*1. Create an array with numeric values
2. Declare a variable to store the sum
3. Use a loop to iterate through the array
4. Add each element to the sum variable
5. Print the final sum*/

let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let sum = 0;

for (let i = 0; i < numArray.length; i++) {
  //console.log(numArray[i]);
  sum = sum + numArray[i];
}
console.log(sum);
