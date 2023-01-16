const eqArrays = require("./eqArrays");

const assertArraysEqual = function (first, second) {
  if(eqArrays(first, second))
  {
    console.log("Passed: Congratulations they are the same 🥳");
  }else {
    console.log("Failed: Not quiet the same thing they are hmm.. <(-.-)>");
  }
}

module.exports = assertArraysEqual;