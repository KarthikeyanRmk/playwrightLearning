/*Declare a global variable and shadow it inside a function using both `var` and `let` to 
  see how they behave differently when printed.*/


const browserVersion = "Chrome";

// Version 1: Using var
function getBrowserVersionVar() {

    if (browserVersion === "Chrome") {
        var browserVersion = "Chrome";
    }

    console.log("Using var:", browserVersion);
}

// Version 2: Using let
function getBrowserVersionLet() {

    if (browserVersion === "Chrome") {
        let browserVersion = "Chrome";
    }

    console.log("Using let:", browserVersion);
}

getBrowserVersionVar();
getBrowserVersionLet();