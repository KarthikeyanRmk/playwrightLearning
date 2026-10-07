//Learn to implement a JavaScript function determining whether a given number is odd or even


function isOddOrEven(num) {
    if (num % 2 == 0) {
        return "Even";

    }
    else {
        return "Odd";
    }
}

let num = 10;

console.log(isOddOrEven(num));
