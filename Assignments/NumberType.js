//Learn to categorize a number as positive, negative, or zero using conditional statements in JavaScript.

function checkNumber(number) {
    if (number > 0) {
        console.log("Number is Positive");

    }
    else if (number < 0) {
        console.log("Number is Negative");

    }
    else {
        console.log("Number is Zero");
    }
}

let number = 80000;

checkNumber(number);