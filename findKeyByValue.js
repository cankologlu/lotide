const assertEqual = require("./assertEqual");

const findKeyByValue = function (object, value) {
  for (let key in object) {
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