const assertEqual = function(actual, expected) {
  // let first = actual
  // let second = expected
  if (actual === expected) {
    console.log(`🤩🤩🤩Assertion Passed: ${actual} === ${expected}`); //Pass condition
  } else {
    console.log(`🤖🤖🤖Assertion Failed: ${actual} === ${expected}`); //Fail condition
  }
};

const countLetters = function(string) {
  let result = {}
  let newString = string.toLowerCase()
  for(let letter of newString) {
    if(letter !== " ") {
      if(!result[letter]) {
       result[letter] = 0
      }
      result[letter] ++
    } 
  }
  return result;
}


console.log(countLetters("Lighthouse Labs"))