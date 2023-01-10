const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🤩🤩🤩Assertion Passed: " + actual + " === " + expected); //Pass condition
  } else {
    console.log("🤖🤖🤖Assertion Failed: " + actual + " === " + expected); //Fail condition
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);