// Example 1 -  The Call Stack
console.log("\nSECTION 1 - The Call Stack");
// No Code

// Example 2 -  Call Stack Debugging w/ Dev Tools
console.log("\nSECTION 2 - Call Stack Debugging w/ Dev Tools");

const repeat = (str, times) => {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
};

const scream = (str) => {
  return str.toUpperCase() + "!!!";
};

const getRantText = (phrase) => {
  let text = scream(phrase);
  let rant = repeat(text, 8);
  return rant;
};

const makeRant = (phrase, el) => {
  const h2 = document.createElement("h2");
  h2.innerText = getRantText(phrase);
  el.appendChild(h2);
};
console.log("HELLO!");

makeRant("I hate parsnips", document.body);
makeRant("if you have to cough, please cover your mouth", document.body);

// Example 3 -  JS is Single Threaded
console.log("\nSECTION 3 - JS is Single Threaded");
// No Code

// Example 4 -  How Asynchronous Callbacks Actually Work
console.log("\nSECTION 4 - How Asynchronous Callbacks Actually Work");
// No Code

// Example 5 -  The Document Object
console.log("\nSECTION 5 - The Document Object");
// No Code

// Example 6 -  getElementById
console.log("\nSECTION 6 - getElementById");

// Example 7 -  getElementsByTagName
console.log("\nSECTION 7 - getElementsByTagName");

// Example 8 -  getElementByClassName
console.log("\nSECTION 8 - getElementByClassName");

// Example 9 -  querySelector & bquerySelectorAll
console.log("\nSECTION 9 - querySelector & bquerySelectorAll");

// Example 10 -  querySelector & bquerySelectorAll
console.log("\nSECTION 9 - querySelector & bquerySelectorAll");
