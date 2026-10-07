/*Create and call two JavaScript functions: `launchBrowser` with `if-else` 
for browser launch messages, and `runTests` with `switch` for test type messages*/

function launchBrowser(browserName) {
  if (browserName === "chrome") {
    console.log("The browser is chrome");
  } else {
    console.log("The browser is not chrome");
  }
}

function runTests(testType) {
  switch (testType) {
    case "smoke":
      console.log("Running smoke tests");

      break;
    case "sanity":
      console.log("Running sanity tests");

      break;
    case "regression":
      console.log("Running regression tests");

      break;

    default:
      console.log("Running smoke tests");
      break;
  }
}
launchBrowser("Webkit");
runTests("performance");
