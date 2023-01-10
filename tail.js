const assertEqual = function(actual, expected) {
  // let first = actual
  // let second = expected
  if (actual === expected) {
    console.log(`🤩🤩🤩Assertion Passed: ${actual} === ${expected}`); //Pass condition
  } else {
    console.log(`🤖🤖🤖Assertion Failed: ${actual} === ${expected}`); //Fail condition
  }
};

const tail = function(array) {
  return array.slice(1);
}

//console.log(tail([1,2,3,4,5]))

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// console.log(tail(words));
// console.log(words)