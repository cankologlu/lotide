const assertEqual = function(actual, expected) {
  // let first = actual
  // let second = expected
  if (actual === expected) {
    console.log(`🤩🤩🤩Assertion Passed: ${actual} === ${expected}`); //Pass condition
  } else {
    console.log(`🤖🤖🤖Assertion Failed: ${actual} === ${expected}`); //Fail condition
  }
};

const findKeyByValue = function (object, value) {
  for (let key in object) {
    // console.log("The key here is:" + key)
    // console.log("The value here is:" + object[key])
    if(object[key] === value) {
      return key;
    }
  }
}


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
}

//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

//findKeyByValue(bestTVShowsByGenre);

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);