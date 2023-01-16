const assertEqual = function(actual, expected) {
  // let first = actual
  // let second = expected
  if (actual === expected) {
    console.log(`🤩🤩🤩Assertion Passed: ${actual} === ${expected}`); //Pass condition
  } else {
    console.log(`🤖🤖🤖Assertion Failed: ${actual} === ${expected}`); //Fail condition
  }
};

module.exports = assertEqual;
//console.log(module);   // testing to see if module exports the function