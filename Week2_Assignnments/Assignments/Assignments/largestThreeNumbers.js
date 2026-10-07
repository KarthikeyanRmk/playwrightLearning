//Write a JavaScript program to find the largest of three numbers.
let num1 = 570;
let num2 = 870;
let num3 = 270;
if (num1 === num2 && num2 === num3) {
  console.log("All three numbers are equal");
} else if (num1 > num2 && num1 > num3) {
  console.log("Num1 is biggest");
} else if (num2 > num1 && num2 > num3) {
  console.log("Num2 is biggest");
} else if (num3 > num2 && num3 > num1) {
  console.log("Num3 is biggest");
}
