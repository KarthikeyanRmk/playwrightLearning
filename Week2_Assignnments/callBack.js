//Learn how to use callbacks to handle asynchronous tasks in JavaScript.

let gBrowser = "Chrome";

function logBrowserVersion(version) {
  console.log("Browser version using callback: " + version);
}

function checkBrowserVersion(c1) {
  setTimeout(() => {}, 2000);
  c1(gBrowser);
}

checkBrowserVersion(logBrowserVersion);
