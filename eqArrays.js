const assertEqual = function(actual, expected) {
  // let first = actual
  // let second = expected
  if (actual === expected) {
    console.log(`🤩🤩🤩Assertion Passed: ${actual} === ${expected}`); //Pass condition
  } else {
    console.log(`🤖🤖🤖Assertion Failed: ${actual} === ${expected}`); //Fail condition
  }
};


const eqArrays = function (first, second) {
  if(first.length !== second.length) {
    return false;
  }
  let control = true;
  for(let i = 0; i < first.length; i++) {
    if(first[i] === second[i]) {
    control = true;
    }else {
    control = false;
    }
  }return control;
}

const eqArraysSecond = function (first, second) {
  if(first.length !== second.length) {
    return false;
  }
  for(let i = 0; i < first.length; i++) {
    if(first[i] !== second[i]) {
    return false;
    }
  }return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(eqArraysSecond([1, 2, 3], [1, 2, 3]), true);
